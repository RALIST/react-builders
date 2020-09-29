import React from "react";
import { Switch, Route } from 'react-router-dom';
import urls from './urls'

const Routes = () => {

  const links = urls.map(({url, component}) => {
    return(
      <Route exact path={url} component={component} key={url}/>
    )
  })

  return (
    <Switch>
      { [...links] }
    </Switch>
  )
}
export default Routes;
