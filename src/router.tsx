import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Layout } from '@/components/layout'
import { ScrollToTop } from '@/components/ScrollToTop'
import {
  HomePage,
  AboutPage,
  ServicesPage,
  ProjectsPage,
  ContactPage,
  NotFoundPage,
} from '@/pages'

export function AppRouter(): React.ReactElement {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="about" element={<AboutPage />} />
          <Route path="services" element={<ServicesPage />} />
          <Route path="projects" element={<ProjectsPage />} />
          <Route path="contact" element={<ContactPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
