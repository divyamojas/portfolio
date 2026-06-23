import { useEffect } from 'react'

const BASE = 'Divyam Ojas'

const useTitle = (page) => {
  useEffect(() => {
    document.title = page ? `${page} · ${BASE}` : `${BASE} — Sr. Technical Support Engineer`
  }, [page])
}

export default useTitle
