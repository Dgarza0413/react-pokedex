import React from 'react'

import './Style.css'

const StatTable = ({ stats }) => {
    return (
        <div className="nes-container with-title">
            <h3 className='title'>Stats</h3>
            <div className="nes-table-responsive">
                {stats.length > 0 ?
                    <table className="nes-table is-bordered is-centered">
                        <thead>
                            <tr>
                                <th>Stat Name</th>
                                <th>#</th>
                                <th>level</th>
                            </tr>
                        </thead>
                        {stats.map(e => {
                            return (
                                <>
                                    <tbody>
                                        <tr>
                                            <td>
                                                {e.stat.name}
                                            </td>
                                            <td>
                                                {e.base_stat}
                                            </td>
                                            <td>
                                                <progress className="nes-progress" value={e.base_stat} max="100"></progress>
                                            </td>
                                        </tr>
                                    </tbody>
                                </>
                            )
                        })}
                    </table> : ""}
            </div>
        </div>
    )
}

export default StatTable;