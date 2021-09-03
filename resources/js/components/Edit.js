import React from 'react';
import Appcontainer from './Appcontainer';

export default function Edit() {
    return (
        <Appcontainer
            title="EDIT POST"
        >
            <form>
                <div className="form-group">
                    <label>Title</label>
                    <input className="form-control" type="text"/>
                </div>
                <div className="form-group">
                    <label>Description</label>
                    <textarea className="form-control"></textarea>
                    <button className="btn btn-success" type="button" style={{marginTop:"1em"}}>Save</button>
                </div>
            </form>
        </Appcontainer>
    )
}
