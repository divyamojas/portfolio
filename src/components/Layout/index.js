import './index.scss'
import useWindowDimensions from '../../hooks/useWindowDimension'
import Sidebar from '../Sidebar'
import BottomBar from '../BottomBar'
import { Outlet } from 'react-router-dom'

const Layout = () => {
  const { width } = useWindowDimensions()
  return (
    <div className="App">
      {width > 480 ? <Sidebar /> : <BottomBar />}
      <div className="page">
        <span className="tags top-tags">
          <span className="top-tag-doctype"> &lt;!doctype portfolio&gt;</span>
          <br />
          <br />
          &lt;body&gt;
        </span>
        <div className="content">
          <Outlet />
        </div>

        <span className="tags bottom-tags">
          &lt;/body&gt;
          <br />
          <br />
          <span className="bottom-tag-html"> Thanks for visiting my page!</span>
        </span>
      </div>
    </div>
  )
}

export default Layout
