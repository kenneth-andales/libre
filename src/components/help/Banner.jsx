import HelpLogo from '../../assets/help/bannerhelp.png'

function Banner() {
  return (
    <>
      <div className="md:tw-flex tw-w-full" style={{ height: '65vh'}}>
        <div className="tw-w-full md:tw-w-1/2 tw-px-3">
          <h1 className=" tw-text-heading-sm md:tw-text-heading bold tw-flex tw-flex-col md:tw-mt-10">What's up? <span className="tw-text-blue">We are happy to help!</span></h1>
        </div>
        <div className="tw-w-full md:tw-w-1/2 tw-relative tw-overflow-hidden md:tw-overflow-visible -tw-z-10">
          <img src={HelpLogo} alt="help banner" className="tw-scale-110 tw-mt-10"/>
        </div>
      </div>
    </>
  )
}

export default Banner