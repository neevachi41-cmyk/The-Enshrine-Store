import { useState } from 'react'
import { CATS } from '../data'
import AdminLogin from './admin/AdminLogin'
import AdminTable from './admin/AdminTable'
import ProductForm from './admin/ProductForm'

function AdminPanel({ products, isAdmin, adminCredentials, onLogin, onLogout, onUpdateAdmin, onBack, onSaveProducts, onResetProducts, onProductClick }) {
  const [editingProduct, setEditingProduct] = useState(null)
  const [showProfile, setShowProfile] = useState(false)
  const [newEmail, setNewEmail] = useState('')
  const [newPassword, setNewPassword] = useState('')

  const handleEdit = (product) => {
    setEditingProduct(product)
  }

  const handleSave = async (formData) => {
    const updatedProducts = editingProduct
      ? products.map(p => p.id === editingProduct.id ? formData : p)
      : [...products, formData]

    await onSaveProducts(updatedProducts)
    setEditingProduct(null)
  }

  const handleDelete = async (id) => {
    if (confirm('Remove this product?')) {
      await onSaveProducts(products.filter(p => p.id !== id))
    }
  }

  const handleNewProduct = () => {
    setEditingProduct(null)
  }

  const handleShowProfile = () => {
    setNewEmail(adminCredentials.email)
    setNewPassword(adminCredentials.password)
    setShowProfile(true)
  }

  const handleUpdateProfile = async () => {
    if (newEmail && newPassword) {
      await onUpdateAdmin(newEmail, newPassword)
      setShowProfile(false)
    } else {
      alert('Please fill in both email and password')
    }
  }

  if (!isAdmin) {
    return (
      <section className="admin-panel show">
        <div className="admin-wrap">
          <AdminLogin onLogin={onLogin} />
        </div>
      </section>
    )
  }

  return (
    <section className="admin-panel show">
      <div className="admin-wrap">
        <div className="admin-top">
          <div>
            <span className="eyebrow">CONTROL ROOM</span>
            <h2 style={{ fontFamily: '"Playfair Display", serif', fontWeight: 600, fontSize: '36px', margin: '6px 0' }}>Product Manager</h2>
          </div>
          <div>
            <button className="btn soft" onClick={handleShowProfile}>👤 Profile</button>
            <button className="btn soft" onClick={onBack}>← Store</button>
            <button className="btn dark" onClick={onLogout}>Logout</button>
          </div>
        </div>
        <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap', marginBottom: '18px' }}>
          <button className="btn primary" onClick={handleNewProduct}>+ Add product</button>
          <button className="btn soft" onClick={onResetProducts}>Reset demo products</button>
        </div>

        {showProfile && (
          <div className="modal show">
            <div className="modal-box">
              <div className="modal-head">
                <h2 style={{ fontFamily: '"Playfair Display", serif', fontWeight: 600, fontSize: '28px' }}>
                  Admin Profile
                </h2>
                <button className="close" onClick={() => setShowProfile(false)}>×</button>
              </div>
              <div className="field" style={{ marginTop: '16px' }}>
                <label>Current Email</label>
                <input
                  type="email"
                  value={adminCredentials.email}
                  disabled
                  style={{ background: 'var(--lav)', opacity: 0.7 }}
                />
              </div>
              <div className="field" style={{ marginTop: '12px' }}>
                <label>New Email</label>
                <input
                  type="email"
                  value={newEmail}
                  onChange={(e) => setNewEmail(e.target.value)}
                  placeholder="Enter new email"
                />
              </div>
              <div className="field" style={{ marginTop: '12px' }}>
                <label>New Password</label>
                <input
                  type="password"
                  value={newPassword}
                  onChange={(e) => setNewPassword(e.target.value)}
                  placeholder="Enter new password"
                />
              </div>
              <button
                className="btn primary"
                style={{ width: '100%', marginTop: '16px' }}
                onClick={handleUpdateProfile}
              >
                Update Credentials
              </button>
              <p style={{ fontSize: '11px', color: '#9b91a4', marginTop: '12px', textAlign: 'center' }}>
                ⚠️ After updating, you'll need to login with the new credentials
              </p>
            </div>
          </div>
        )}

        {editingProduct !== null ? (
          <ProductForm
            product={editingProduct}
            categories={CATS}
            onSave={handleSave}
            onCancel={() => setEditingProduct(null)}
          />
        ) : (
          <AdminTable
            products={products}
            onEdit={handleEdit}
            onDelete={handleDelete}
          />
        )}
      </div>
    </section>
  )
}

export default AdminPanel
