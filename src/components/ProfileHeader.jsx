import { PlusIcon } from './Icons.jsx'

const profileTabs = ['About', 'Experience', 'Skills', 'Education', 'Activity']

function ProfileHeader({ activeTab, onAddExperience, onTabChange }) {
  return (
    <section className="profile-card" aria-label="Profile">
      <div className="profile-cover" aria-hidden="true" />
      <div className="profile-summary">
        <div className="avatar-wrap">
          <div className="avatar" aria-hidden="true">DK</div>
          <span className="online-indicator" />
        </div>
        <div className="profile-copy">
          <h1>Darshan Kamble</h1>
          <p className="profile-headline">Full Stack Developer</p>
          <p className="profile-subline">Building AI-Powered Solutions · Pune, India</p>
        </div>
        <button
          className="button button-outline profile-add"
          onClick={onAddExperience}
          type="button"
        >
          <PlusIcon />
          Add experience
        </button>
      </div>
      <nav className="profile-tabs" aria-label="Profile sections">
        {profileTabs.map((tab) => (
          <button
            aria-current={activeTab === tab ? 'page' : undefined}
            className={`profile-tab${activeTab === tab ? ' active' : ''}`}
            key={tab}
            onClick={() => onTabChange(tab)}
            type="button"
          >
            {tab}
          </button>
        ))}
      </nav>
    </section>
  )
}

export default ProfileHeader
