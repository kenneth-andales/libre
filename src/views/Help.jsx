import Banner from '../components/help/Banner'
import Faqs from '../components/help/Faqs'
import Membership from '../components/help/Membership'
import Privacy from '../components/help/Privacy'

export default function Help() {
  return (
    <div style={{marginTop: '100px'}} className="md:tw-px-10 lg:tw-px-20">
      <Banner />
      <Faqs />
      <Membership />
      <Privacy />
    </div>
  )
}