import faqs from '../../shared/help/faqs'
import MessageIcon from '../../assets/help/message.png'

function Faqs() {
    const FaqsItem = ({answer, question, number}) => (
        <div className='tw-border-b tw-border-border tw-py-5 tw-mb-5'>
            <p className='tw-mb-3 bold'>{number}. {question}</p>
            <div className='tw-flex tw-items-baseline tw-gap-5'>
            <hr className='tw-w-1/4 md:tw-w-20 tw-border-border' />
            <p className="tw-text-light tw-w-3/4">{answer}</p>
            </div>
        </div>
    )

  return (
    <>
        <div className="tw-w-full tw-px-3 tw-mb-5">
            <img className="tw-w-20" src={MessageIcon} alt="message icon" />
        </div>
        <div className="tw-w-full">
            <h3 className="tw-bg-yellow tw-px-3 tw-py-2 tw-text-white tw-text-xl md:tw-text-center">Frequently Asked Questions</h3>
            <div className='tw-px-3 tw-py-5'>
                {faqs.map((faq, index) => (<FaqsItem key={index} number={++index} answer={faq.answer} question={faq.question} />))}
            </div>
        </div>
    </>
  )
}

export default Faqs