import { useState, forwardRef } from 'react'

const CustomForm = forwardRef(({ initialProduct, onSubmit }, ref) => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    product: initialProduct || '',
    details: '',
    file: null
  })

  const handleChange = (field, value) => {
    setFormData({ ...formData, [field]: value })
  }

  const handleFileChange = (e) => {
    const file = e.target.files[0]
    if (file) {
      setFormData({ ...formData, file: file.name })
    }
  }

  return (
    <form ref={ref} className="form-grid" onSubmit={(e) => { e.preventDefault(); onSubmit(formData) }}>
      <div className="field">
        <label>Your name</label>
        <input
          value={formData.name}
          onChange={(e) => handleChange('name', e.target.value)}
          placeholder="Your name"
        />
      </div>
      <div className="field">
        <label>Phone / WhatsApp</label>
        <input
          value={formData.phone}
          onChange={(e) => handleChange('phone', e.target.value)}
          placeholder="+91 ..."
        />
      </div>
      <div className="field full">
        <input
          value={formData.product}
          onChange={(e) => handleChange('product', e.target.value)}
          placeholder="e.g. personalised moon lamp"
          style={{ display: 'none' }}
        />
      </div>
      <div className="field full">
        <label>Details</label>
        <textarea
          value={formData.details}
          onChange={(e) => handleChange('details', e.target.value)}
          placeholder="Photo, name, quote, colour, size, reference idea..."
        />
      </div>
      <div className="field full">
        <label>Attach File (Photo, STL, Reference)</label>
        <input
          type="file"
          onChange={handleFileChange}
          accept="image/*,.stl,.obj,.3mf,.step,.iges,.pdf"
          style={{ padding: '8px' }}
        />
        <p style={{ fontSize: '11px', color: 'var(--muted)', marginTop: '4px' }}>
          Supported: Images, STL, 3D files, PDF
        </p>
      </div>
    </form>
  )
})

CustomForm.displayName = 'CustomForm'

export default CustomForm
