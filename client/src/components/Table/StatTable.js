import React from 'react'

const StatTable = ({ stats }) => {
    console.log(stats)
    return (
        <div className="nes-container with-title">
            <h3 className='title'>Stats</h3>
            <div className="nes-table-responsive">
                <table className="nes-table is-bordered is-centered">
                    {stats.length > 0 ? <thead>
                        <tr>
                            <th>Stat Name</th>
                            <th>#</th>
                            <th>level</th>
                        </tr>
                    </thead> : ""}
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
                </table>
            </div>
        </div>
    )
}

export default StatTable;