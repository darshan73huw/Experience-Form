import { useState } from 'react'
import ExperienceForm from './components/ExperienceForm.jsx'
import ExperienceSection from './components/ExperienceSection.jsx'
import ProfileHeader from './components/ProfileHeader.jsx'
import ProfileContent from './components/ProfileContent.jsx'
import { emptyExperience, starterExperience } from './data/experiences.js'
import './styles/app.css'

function App() {
  const [experiences, setExperiences] = useState([starterExperience])
  const [isFormOpen, setIsFormOpen] = useState(true)
  const [form, setForm] = useState(emptyExperience)
  const [editingId, setEditingId] = useState(null)
  const [activeTab, setActiveTab] = useState('Experience')

  function openForm(experience) {
    if (experience) {
      const { id, ...values } = experience
      setForm(values)
      setEditingId(id)
    } else {
      setForm(emptyExperience)
      setEditingId(null)
    }
    setIsFormOpen(true)
  }

  function closeForm() {
    setIsFormOpen(false)
    setForm(emptyExperience)
    setEditingId(null)
  }

  function handleChange(event) {
    const { name, value, checked, type } = event.target
    setForm((current) => ({
      ...current,
      [name]: type === 'checkbox' ? checked : value,
      ...(name === 'isCurrent' && checked ? { endDate: '' } : {}),
    }))
  }

  function handleSubmit(event) {
    event.preventDefault()
    if (editingId !== null) {
      setExperiences((current) =>
        current.map((experience) =>
          experience.id === editingId ? { ...form, id: editingId } : experience,
        ),
      )
    } else {
      setExperiences((current) => [
        { ...form, id: Date.now() },
        ...current,
      ])
    }
    closeForm()
  }

  function removeExperience(id) {
    setExperiences((current) =>
      current.filter((experience) => experience.id !== id),
    )
  }

  return (
    <main className="page-shell">
      <ProfileHeader
        activeTab={activeTab}
        onAddExperience={() => {
          setActiveTab('Experience')
          openForm()
        }}
        onTabChange={setActiveTab}
      />

      {activeTab === 'Experience' && isFormOpen && (
        <ExperienceForm
          editingId={editingId}
          form={form}
          onCancel={closeForm}
          onChange={handleChange}
          onSubmit={handleSubmit}
        />
      )}

      {activeTab === 'Experience' ? (
        <ExperienceSection
          experiences={experiences}
          onAdd={() => openForm()}
          onDelete={removeExperience}
          onEdit={openForm}
        />
      ) : (
        <ProfileContent activeTab={activeTab} />
      )}
    </main>
  )
}

export default App
