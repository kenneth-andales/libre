import NotIcon from '../../assets/help/not.png'
import MembershipIcon from '../../assets/help/membership.png'
import termandcondition from '../../shared/help/termandcondition'

function Membership() {
    const TermsAndConditions = ({content, subcontent, number}) => (
        <div>
            <p>{number}. <span dangerouslySetInnerHTML={{__html: content}}></span></p>
            {subcontent.length ? 
                <div className='tw-mb-12'>
                <div className='tw-grid tw-grid-cols-2 md:tw-grid-cols-4 tw-gap-8 tw-items-baseline tw-p-8'>
                    {subcontent.map((subcontentitem, index) => 
                    <ProhibitedPosting key={index} image={subcontentitem.img} content={subcontentitem.content} />)}
                </div> 
                <div className="tw-border-t-2 tw-mt-3 tw-col-span-2 tw-border-blue md:tw-w-1/3 tw-py-3">
                    <p className="tw-text-light">Others items prohibited by law</p>
                </div>
                </div> 
                : null
            }
        </div>
    )
      
    const ProhibitedPosting = ({image, content}) => (
    <div className=''>
        <div>
        <div className='tw-mb-4 tw-flex tw-justify-center tw-relative -tw-z-10'>
            <img src={image} alt={content} className="tw-h-12 lg:tw-h-20" />
            <img src={NotIcon} alt="not icon" className='tw-absolute tw-top-0 tw-right-0 md:tw-right-5 tw-h-4 tw-w-4 lg:tw-h-7 lg:tw-w-7' />
        </div>
        <p className="tw-text-light tw-text-center">{content}</p>
        </div>
    </div>
    )


  return (
    <>
        <div className="tw-w-full tw-px-3 tw-mb-5">
            <img className="tw-h-20" src={MembershipIcon} alt="membership icon" />
        </div>
        <div className="tw-w-full">
            <h3 className="tw-bg-primary tw-px-3 tw-py-2 tw-text-white tw-text-xl md:tw-text-center">Membership Agreement Terms and Conditions</h3>
            <div className="tw-p-3 tw-flex md:tw-block tw-flex-col tw-gap-4">
                <p><span className='bold'>LIBRE</span> is a social media application where members can give items that they wish to share and where members may take items that could be of use to them. </p>
                <p>Membership in <span className='bold'>LIBRE</span> is free.</p>
                <p>This site is not for commercial purposes and shall not involve any sale or purchase transaction.</p>
            </div>
            <div className='tw-px-3 tw-pb-10 '>
                <h4 className='tw-text-blue tw-text-xl bold tw-my-5'>Terms and Conditions</h4>
                {termandcondition.map((term, index) => <TermsAndConditions key={index} content={term.content} subcontent={term.subcontent} number={++index} />)}
            </div>
        </div>

        <div className="tw-px-3">
            <button type='button' className='btn-term'>I Accept Terms & Conditions</button>
        </div>
    </>
  )
}

export default Membership