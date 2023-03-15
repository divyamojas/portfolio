import useWindowDimensions from '../../hooks/useWindowDimension'
import Sidebar from '../Sidebar'
import BottomBar from '../BottomBar'
import { Outlet } from 'react-router-dom'

import './index.scss'

const Layout = () => {
  const { width } = useWindowDimensions()
  return (
    <div className="App">
      {width > 480 ? <Sidebar /> : <BottomBar />}
      <div className="page">
        <span className="tags top-tags">
          <span className="top-tag-doctype"> &lt;!doctype portfolio&gt;</span>
          <br />
          <span className="top-tag-html"> &lt;html&gt;</span>
          <br />
          &lt;body&gt;
        </span>
        <div className="content">
          <Outlet />
        </div>

        <span className="tags bottom-tags">
          &lt;/body&gt;
          <br />
          <span className="bottom-tag-html"> &lt;/html&gt;</span>
          <br />
          <span className="bottom-thanks"> Thanks for visiting my page!</span>
        </span>
      </div>
    </div>
  )
}

export default Layout
