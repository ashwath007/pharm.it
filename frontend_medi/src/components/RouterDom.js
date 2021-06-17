import React from 'react'
import {BrowserRouter as Router , Switch , Route} from 'react-router-dom'
import App from '../App'
import Medicine from './MedicineComponent/Medicine'
function RouterDom() {
    return (
        <Router>
            <Switch>
                <Route path="/" exact> <App/> </Route>
                <Route path="/medicine" render={(props) => <Medicine {...props}/>}/>
            </Switch>
        </Router>
    )
}

export default RouterDom
