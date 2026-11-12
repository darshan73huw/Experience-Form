import { BriefcaseIcon, CloseIcon } from './Icons.jsx'

function ExperienceForm({ editingId, form, onCancel, onChange, onSubmit }) {
  return (
    <section className="content-card form-card" aria-labelledby="form-title">
      <div className="card-heading form-heading">
        <div className="heading-title">
          <span className="heading-icon"><BriefcaseIcon /></span>
          <h2 id="form-title">
            {editingId === null ? 'Add Experience' : 'Edit Experience'}
          </h2>
        </div>
        <button
          className="icon-button close-button"
          onClick={onCancel}
          type="button"
          aria-label="Close form"
        >
          <CloseIcon />
        </button>
      </div>

      <form onSubmit={onSubmit}>
        <div className="form-grid">
          <label className="field">
            <span>Job title <b>*</b></span>
            <input
              autoFocus
              name="title"
              onChange={onChange}
              placeholder="Ex: Frontend Developer"
              required
              value={form.title}
            />
          </label>
          <label className="field">
            <span>Company name <b>*</b></span>
            <input
              name="company"
              onChange={onChange}
              placeholder="Ex: Acme Inc."
              required
              value={form.company}
            />
          </label>
          <label className="field">
            <span>Employment type</span>
            <select
              name="employmentType"
              onChange={onChange}
              value={form.employmentType}
            >
              <option>Full-time</option>
              <option>Part-time</option>
              <option>Self-employed</option>
              <option>Freelance</option>
              <option>Contract</option>
              <option>Internship</option>
              <option>Apprenticeship</option>
              <option>Seasonal</option>
            </select>
          </label>
          <label className="field">
            <span>Location</span>
            <input
              name="location"
              onChange={onChange}
              placeholder="Ex: Pune, India"
              value={form.location}
            />
          </label>
          <label className="field">
            <span>Start date <b>*</b></span>
            <input
              max={form.endDate || undefined}
              name="startDate"
              onChange={onChange}
              required
              type="month"
              value={form.startDate}
            />
          </label>
          <label className="field">
            <span>End date</span>
            <input
              disabled={form.isCurrent}
              min={form.startDate || undefined}
              name="endDate"
              onChange={onChange}
              required={!form.isCurrent}
              type="month"
              value={form.endDate}
            />
          </label>
        </div>
        <label className="current-role">
          <input
            checked={form.isCurrent}
            name="isCurrent"
            onChange={onChange}
            type="checkbox"
          />
          <span>I am currently working in this role</span>
        </label>
        <label className="field description-field">
          <span>Description</span>
          <textarea
            maxLength={500}
            name="description"
            onChange={onChange}
            placeholder="Share a few details about your role and accomplishments."
            rows="4"
            value={form.description}
          />
          <span className="character-count">{form.description.length}/500</span>
        </label>
        <div className="form-actions">
          <button className="button button-text" onClick={onCancel} type="button">
            Cancel
          </button>
          <button className="button button-primary" type="submit">
            {editingId === null ? 'Save experience' : 'Save changes'}
          </button>
        </div>
      </form>
    </section>
  )
}

export default ExperienceForm
