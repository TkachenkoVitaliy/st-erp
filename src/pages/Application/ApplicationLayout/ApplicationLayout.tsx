import { Outlet } from 'react-router-dom'
import { Sidebar } from 'widgets/Sidebar'

import styles from './ApplicationLayout.module.scss'

export const ApplicationLayout = () => {
  return (
    <div className={styles.application}>
      <div className={styles.side}>
        <Sidebar />
      </div>
      <div className={styles.content}>
        <Outlet />
      </div>
    </div>
  )
}
