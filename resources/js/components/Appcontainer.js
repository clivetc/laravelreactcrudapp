import React from 'react'

export default function Appcontainer({title, children}) {
    return (
        <div className="container">
            <div class="card">
                <h5 className="card-header">{title}</h5>
                <div className="card-body">
                   {children}
                </div>
            </div>
        </div>
    )
}
