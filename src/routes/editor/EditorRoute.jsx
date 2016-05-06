import React from 'react'
import { Route, IndexRoute } from 'react-router'

import InitView from './components/InitView/InitView'
import EditorLayout from './components/EditorLayout/EditorLayout'
import UploadRoute from './routes/upload/UploadRoute'

export default (
  <Route path="/editor" component={EditorLayout}>
    <IndexRoute component={InitView} />
    {UploadRoute}
  </Route>
)
