import React from 'react'
import { useInView } from 'react-intersection-observer';

export default function Packages() {
  return (
    <section className='w-full mx-auto flex flex-col md:flex-row items-center justify-between  my-10 md:gap-5 gap-14'>

      <Package packageName='الاولي' time='14:00' />
      <Package packageName='الثانية' time='16:00' />
      <Package packageName='الثالثة' time='18:00' />

    </section>
  )
}




function Package({ packageName, time }) {
  const [ref, inView] = useInView({
    triggerOnce: true, 
  });


  return (
    <div ref={ref} className={`bg-white mx-auto  drop-shadow-xl lg:w-[330px] w-[250px] lg:h-[330px] h-[250px]  rounded-full border-[10px] border-[#d9ac6b] flex items-center justify-center animate__animated  ${inView && ' animate__fadeInUp'}`}>
      <div id='dimoand' className='w-[70px] h-[70px] rounded-full bg-white flex items-center justify-center absolute -top-[40px] left-1/2 transform -translate-x-1/2 border-2 border-[#d9ac6b] p-1 '>
        <svg width="57" height="46" viewBox="0 0 57 46" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M56.6952 16.2402C56.6971 15.9634 56.6232 15.6868 56.469 15.4451L47.2004 0.912805C47.1962 0.906092 47.1911 0.900259 47.1869 0.893656C47.1833 0.888374 47.1809 0.882651 47.1774 0.877589C47.1701 0.866804 47.1612 0.857449 47.1536 0.846884C47.1314 0.815959 47.1083 0.785805 47.0842 0.757082C47.0724 0.743105 47.0604 0.729349 47.048 0.715702C47.0206 0.685438 46.992 0.656824 46.9625 0.629421C46.9519 0.619626 46.9419 0.609501 46.9312 0.600257C46.8475 0.526742 46.7566 0.463792 46.6605 0.412288C46.6495 0.406455 46.6382 0.401503 46.6271 0.39589C46.59 0.377181 46.5521 0.359793 46.5137 0.344386C46.4975 0.337782 46.4811 0.331839 46.4647 0.325786C46.4285 0.3128 46.392 0.301355 46.3551 0.29112C46.339 0.286718 46.3229 0.281876 46.3067 0.278024C46.2547 0.265588 46.2023 0.255353 46.1493 0.24864C46.1488 0.24864 46.1483 0.24853 46.1477 0.24831C46.0924 0.241487 46.0367 0.238515 45.9809 0.238075C45.9765 0.238075 45.9723 0.237305 45.9679 0.237305H28.4997H11.0318C10.5474 0.237305 10.0943 0.477108 9.82229 0.877589C9.55023 1.27818 9.49439 1.78739 9.67337 2.23728L14.658 14.7695H4.42838L7.65706 9.70698C8.09092 9.02663 7.89079 8.12387 7.20987 7.69038C6.52895 7.25688 5.62555 7.45674 5.19157 8.13719L0.530569 15.4452C0.376035 15.6873 0.302128 15.9643 0.304331 16.2416C0.286488 16.6252 0.418111 17.0153 0.703717 17.3158L27.4401 45.4276C27.448 45.436 27.4567 45.4429 27.4648 45.451C27.4732 45.4594 27.4807 45.4687 27.4893 45.4769C27.5001 45.4872 27.5117 45.496 27.5227 45.5059C27.5404 45.5218 27.5581 45.5375 27.5763 45.5523C27.5965 45.5688 27.6171 45.5844 27.6379 45.5995C27.6566 45.6133 27.6754 45.6268 27.6946 45.6396C27.7166 45.654 27.7389 45.6673 27.7613 45.6805C27.7803 45.6917 27.7992 45.703 27.8185 45.7132C27.8426 45.7259 27.8671 45.7372 27.8917 45.7484C27.9104 45.757 27.9289 45.7659 27.948 45.7738C27.9744 45.7845 28.0013 45.7936 28.0283 45.8028C28.0461 45.809 28.0637 45.8157 28.0819 45.821C28.1111 45.8298 28.1408 45.8365 28.1705 45.8433C28.1866 45.8472 28.2027 45.8517 28.2193 45.8549C28.2524 45.8612 28.2858 45.8657 28.3193 45.8697C28.3326 45.8714 28.3459 45.8739 28.3591 45.8752C28.4059 45.8797 28.4529 45.8823 28.4998 45.8823H28.5C28.5468 45.8823 28.5935 45.8797 28.6402 45.8754C28.6533 45.8741 28.6665 45.8715 28.6797 45.8699C28.713 45.8659 28.7463 45.8616 28.7793 45.8552C28.7959 45.852 28.8121 45.8475 28.8285 45.8436C28.8579 45.8369 28.8873 45.8302 28.9161 45.8216C28.9343 45.8162 28.952 45.8095 28.9699 45.8035C28.9965 45.7944 29.0231 45.7855 29.0493 45.7749C29.0685 45.7672 29.0872 45.758 29.106 45.7495C29.1303 45.7384 29.1544 45.7275 29.1783 45.7149C29.1979 45.7046 29.2168 45.6933 29.236 45.6822C29.2582 45.6692 29.2803 45.6562 29.3021 45.6419C29.3214 45.6293 29.3401 45.6156 29.3588 45.6021C29.3795 45.587 29.4 45.5717 29.4202 45.5553C29.4383 45.5406 29.4558 45.5253 29.4734 45.5096C29.4844 45.4998 29.4961 45.491 29.5068 45.4809C29.5157 45.4725 29.5233 45.4634 29.5317 45.4547C29.5398 45.4467 29.5484 45.4399 29.5563 45.4316L43.0101 31.3757C43.5681 30.7928 43.5475 29.8682 42.964 29.3106C42.3805 28.753 41.4552 28.7739 40.8972 29.3566L32.7638 37.8538L41.5009 17.6912H51.9207L47.9025 21.9434C47.3481 22.5299 47.3748 23.4544 47.9619 24.0081C48.2443 24.2746 48.6051 24.4067 48.9651 24.4067C49.3533 24.4067 49.7407 24.2531 50.0283 23.9487L56.2992 17.3127C56.5829 17.0118 56.7134 16.6227 56.6952 16.2402ZM28.4997 4.02552L37.1653 14.7695H19.834L28.4997 4.02552ZM15.4987 17.6907L24.2073 37.788L5.09343 17.6907H15.4987ZM46.2706 4.89087L52.5712 14.7696H42.3415L46.2706 4.89087ZM43.8136 3.15842L39.7844 13.2885L31.5663 3.15842H43.8136ZM25.4331 3.15842L17.2151 13.2885L13.1859 3.15842H25.4331ZM28.4997 40.3412L18.7191 17.7702H38.2803L28.4997 40.3412Z" fill="#A2C0EC" />
        </svg>
      </div>

      <div className='w-[50%] p-4 text-2xl text-center bg-primary text-white rounded-full cursor-pointer'>{packageName}</div>

      <div className='absolute -bottom-[14px] left-1/2 transform -translate-x-1/2 flex flex-col rounded-full w-[70%] bg-white shadow-lg  text-center px-5 p-3 border'>
        <h1>الدقائق المتبقية</h1>
        <p>{time}</p>
      </div>
    </div>
  )
}