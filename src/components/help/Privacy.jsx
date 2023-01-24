import PrivacyIcon from '../../assets/help/privacy.png'
import privacyandpolicy from '../../shared/help/privacyandpolicy'

function Privacy() {
    const PrivacyandPolicy = ({title, descriptions}) => (
        <div className='tw-mb-8'>
            <h4 className='tw-text-blue tw-text-xl tw-mb-5 bold'>{title}</h4>
            <div className='tw-flex tw-flex-col md:tw-block'>
                {descriptions.map((description, index) => <span key={index} className='tw-mb-5 md:tw-mb-0' dangerouslySetInnerHTML={{__html: description}}></span>)}
            </div>
        </div>
    )

  return (
    <div>
      <div className="tw-w-full tw-px-3 tw-mb-5">
        <img className="tw-h-20" src={PrivacyIcon} alt="privacy icon" />
      </div>
      <div className="tw-w-full">
          <h3 className="tw-bg-blue tw-px-3 tw-py-2 tw-text-white tw-text-xl md:tw-text-center">Privacy and Policy</h3>
          <div className="tw-p-3 tw-flex tw-flex-col tw-gap-4">
            <p>This is the privacy policy of LIBRE. This document explains LIBRE app policies for the collection, use and disclosure of personal information.</p>
          </div>
          <div className='tw-px-3 tw-pb-10 '>
            {privacyandpolicy.map((privacy, index) => <PrivacyandPolicy key={index} title={privacy.title} descriptions={privacy.descriptions} />)}
          </div>
      </div>
    </div>
  )
}

export default Privacy