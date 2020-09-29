import React from "react";
import { Switch, Route } from 'react-router-dom';
import urls from './urls'

const Routes = () => {

  const links = urls.map(({url, component}) => {
    return(
      <Route path={url} component={component} exact key={url}/>
    )
  })

  return (
    <Switch>
      { [...links] }
    </Switch>
  )
}
console.log(Routes)
export default Routes;
