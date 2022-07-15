import React, { useContext } from 'react';
import AlertContext from '../../context/alert/alertContext';

const Alerts = () => {
    const alertContext = useContext(AlertContext);
    // const  {alerts} = alertContext;
        return ( 
            alertContext.alerts.length > 0 && alertContext.alerts.map(alert => (
            <div key={alert.id}  className={`alert alert-${alert.type}`}>
                <i className="fa fa-info-circle">{alert.msg}</i>
            </div>
            ))
    );
}
 
export default Alerts;