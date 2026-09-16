import React from 'react'
import { FaCheck, FaTimes } from 'react-icons/fa'

const AdminBids = () => {
  return (
    <div className="container py-5">
        <div className="row">
          <div className="col-12">
            <span className="dash-eyebrow">Zentora Admin</span>
            <h2 className="dash-heading">Escrow &amp; Bid Monitoring</h2>
          </div>
        </div>

        <div className="row">
          <div className="col-12">
            <div className="dash-card">
              <div className="row mb-3">
                <div className="col-12">
                  <h4>Escrow &amp; Bid Monitoring</h4>
                </div>
              </div>

              <div className="row">
                <div className="col-12">
                  <div className="table-responsive">
                    <table className="table dash-table mb-0">
                      <thead>
                        <tr>
                          <th>Freelancer</th>
                          <th>Project Title</th>
                          <th>Bid Amount</th>
                          <th>Status</th>
                          <th>Resolution</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>Edward Norton</td>
                          <td>E-commerce Website</td>
                          <td>₹80,000</td>
                          <td><span className="status-pending">Pending</span></td>
                          <td>
                            <button type="button" className="action-btn action-btn-block"><FaCheck /> Resolve</button>
                          </td>
                        </tr>
                        <tr>
                          <td>Jane Seymour</td>
                          <td>Mobile App UI</td>
                          <td>₹42,000</td>
                          <td><span className="status-ok">Accepted</span></td>
                          <td>—</td>
                        </tr>
                        <tr>
                          <td>John Travolta</td>
                          <td>API Development</td>
                          <td>₹55,000</td>
                          <td><span className="status-bad">Rejected</span></td>
                          <td><FaTimes className="text-danger" /></td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
  )
}

export default AdminBids
