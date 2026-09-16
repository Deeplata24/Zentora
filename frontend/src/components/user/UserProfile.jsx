import React from 'react'
import { FaCamera } from 'react-icons/fa'

const UserProfile = () => {
  return (
    <div className="container py-5">
        <div className="row">
          <div className="col-12">
            <span className="dash-eyebrow">Zentora for Freelancers</span>
            <h2 className="dash-heading">Talent Dashboard</h2>
          </div>
        </div>

        <div className="row">
          <div className="col-12">
            <div className="dash-card">
              <div className="row mb-3">
                <div className="col-12">
                  <h4>My Profile &amp; Settings</h4>
                  <p className="text-secondary mb-0">
                    Update your photo, contact info, and password to enhance your Zentora profile.
                  </p>
                </div>
              </div>

              <div className="row mb-3">
                <div className="col-12">
                  <div className="profile-photo-card mb-0">
                    <h5>Profile Photo</h5>
                    <div className="row align-items-center g-3">
                      <div className="col-12 col-sm-3">
                        <div className="profile-avatar-wrap">A</div>
                      </div>
                      <div className="col-12 col-sm-9">
                        <p className="text-secondary mb-3">Upload a clear profile photo. JPG or PNG, maximum 2MB.</p>
                        <div className="row g-2">
                          <div className="col-auto">
                            <label className="profile-upload-btn mb-0">
                              <FaCamera /> Choose Photo
                              <input type="file" accept="image/*" hidden />
                            </label>
                          </div>
                          <div className="col-auto">
                            <button type="button" className="btn btn-orange btn-sm">Save Photo</button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="row">
                <div className="col-12">
                  <div className="profile-details-card mb-0">
                    <form>
                      <h5>Account Details</h5>
                      <div className="row g-3 mb-3">
                        <div className="col-12 col-sm-6">
                          <label className="form-label">Full Name / Company</label>
                          <input type="text" className="form-control" defaultValue="Alex Rivera" />
                        </div>
                        <div className="col-12 col-sm-6">
                          <label className="form-label">Email Address</label>
                          <input type="email" className="form-control" defaultValue="alex@mail.com" />
                        </div>
                        <div className="col-12 col-sm-6">
                          <label className="form-label">Phone</label>
                          <input type="tel" className="form-control" defaultValue="+91 98000 11223" />
                        </div>
                        <div className="col-12 col-sm-6">
                          <label className="form-label">Location</label>
                          <input type="text" className="form-control" defaultValue="Bangalore, India" />
                        </div>
                      </div>

                      <h5 className="profile-section-title">Professional Details</h5>
                      <div className="row g-3 mb-3">
                        <div className="col-12 col-sm-6">
                          <label className="form-label">Professional Headline</label>
                          <input type="text" className="form-control" defaultValue="Full-Stack Developer" />
                        </div>
                        <div className="col-12 col-sm-6">
                          <label className="form-label">Hourly Rate (₹/hr)</label>
                          <input type="number" className="form-control" defaultValue="1200" />
                        </div>
                        <div className="col-12">
                          <label className="form-label">Skills (comma separated)</label>
                          <input type="text" className="form-control" defaultValue="React, Node.js, MongoDB" />
                        </div>
                        <div className="col-12">
                          <label className="form-label">Bio Summary</label>
                          <textarea className="form-control" rows="4" defaultValue="Full stack developer specializing in MERN stack." />
                        </div>
                      </div>

                      <h5 className="profile-section-title">Change Password</h5>
                      <div className="row g-3 mb-3">
                        <div className="col-12">
                          <label className="form-label">Current Password</label>
                          <input type="password" className="form-control" placeholder="Leave blank to keep current password" />
                        </div>
                        <div className="col-12 col-sm-6">
                          <label className="form-label">New Password</label>
                          <input type="password" className="form-control" placeholder="Min. 6 characters" />
                        </div>
                        <div className="col-12 col-sm-6">
                          <label className="form-label">Confirm New Password</label>
                          <input type="password" className="form-control" placeholder="Re-enter new password" />
                        </div>
                      </div>

                      <div className="row">
                        <div className="col-12">
                          <button type="button" className="btn btn-orange">Save Profile Changes</button>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
  )
}

export default UserProfile
