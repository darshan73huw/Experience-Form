import { BriefcaseIcon, EditIcon, PlusIcon, TrashIcon } from './Icons.jsx'
import { formatMonth } from '../utils/formatMonth.js'

function ExperienceSection({ experiences, onAdd, onDelete, onEdit }) {
  return (
    <section className="content-card experience-card" aria-labelledby="experience-title">
      <div className="card-heading">
        <div className="heading-title">
          <span className="heading-icon"><BriefcaseIcon /></span>
          <h2 id="experience-title">Experience</h2>
        </div>
        <button
          className="icon-button add-icon-button"
          onClick={onAdd}
          type="button"
          aria-label="Add experience"
        >
          <PlusIcon />
        </button>
      </div>
      {experiences.length > 0 ? (
        <ul className="experience-list">
          {experiences.map((experience) => (
            <li className="experience-item" key={experience.id}>
              <div className="company-logo" aria-hidden="true">
                <BriefcaseIcon />
              </div>
              <div className="experience-details">
                <h3>{experience.title}</h3>
                <p className="company-line">
                  {experience.company} <span>·</span> {experience.employmentType}
                </p>
                <p className="experience-meta">
                  {formatMonth(experience.startDate)} – {experience.isCurrent ? 'Present' : formatMonth(experience.endDate)}
                  {experience.location && <> <span>·</span> {experience.location}</>}
                </p>
                {experience.description && (
                  <p className="experience-description">{experience.description}</p>
                )}
              </div>
              <div className="experience-actions">
                <button
                  className="icon-button"
                  onClick={() => onEdit(experience)}
                  type="button"
                  aria-label={`Edit ${experience.title}`}
                >
                  <EditIcon />
                </button>
                <button
                  className="icon-button"
                  onClick={() => onDelete(experience.id)}
                  type="button"
                  aria-label={`Delete ${experience.title}`}
                >
                  <TrashIcon />
                </button>
              </div>
            </li>
          ))}
        </ul>
      ) : (
        <div className="empty-state">
          <div className="empty-icon"><BriefcaseIcon /></div>
          <h3>No experience added yet</h3>
          <p>Add your work experience to help people learn more about you.</p>
          <button className="button button-outline" onClick={onAdd} type="button">
            <PlusIcon /> Add experience
          </button>
        </div>
      )}
    </section>
  )
}

export default ExperienceSection
