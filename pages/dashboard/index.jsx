import Joyride from 'react-joyride';
import ProductTour from '../../components/common/ProductTour';
import Sidebar from '../../components/common/Sidebar';
import CompanyProduct from '../../components/Dashboard/CompanyProduct';
import LinkCard from '../../components/Dashboard/LinkCard';
import Todo from '../../components/Dashboard/Todo';
import JoinWaitlist from '../../components/Hiring-Challenges/JoinWaitlist';
import Stats from '../../components/Hiring-Challenges/Stats';
import Section from '../../components/Hiring-Challenges/Section';
import UpcomingInterviews from '../../components/Hiring-Challenges/UpcomingInterviews';
import Analytics from '../../components/Hiring-Challenges/Analytics';

import Banner1 from '../../components/banners/Banner1';
import Banner2 from '../../components/banners/Banner2';
import Banner from '../../components/opportunities/banner';
import Opportunities from '../../components/opportunities/opportunities';
import QuestionsComponent from '../../components/opportunities/questionsComponent';
import WalletComponent from '../../components/opportunities/WalletComponent';
import Table from '../../components/opportunities/Table';

// import Link from 'next/link';

const UtilityBoard = () => {
  const steps = [
    {
      content:
        'non veniam ut. In veniam esse in pariatur cupidatat minim reprehenderit magna eiusmod deserunt enim laborum.',
      placement: 'top',
      target: '#first',
      title: 'The good stuff',
    },
    {
      content:
        ' Ea nostrud nulla pariatur proident excepteur ipsum id ut quis. Esse sunt enim aliqua nisi minim reprehenderit culpa laborum est eu culpa consectetur velit mollit.',
      placement: 'right',
      target: '#second',
      title: 'The good stuff',
    },
    {
      content:
        'Exercitation cillum incididunt irure enim aliquip excepteur non pariatur elit minim sit ea occaecat anim. Aliqua fugiat eiusmod sit proident tempor proident do sit adipisicing reprehenderit quis ad nostrud reprehenderit.',
      placement: 'left',
      target: '#third',
      title: 'The good stuff',
    },
    {
      content:
        'cupidatat esse ad et. Sit dolor eu minim esse occaecat reprehenderit laborum aliqua cupidatat elit ea exercitation. Est quis officia labore adipisicing adipisicing consectetur nostrud consectetur qui pariatur excepteur commodo.',
      placement: 'left',
      target: '#forth',
      title: 'The good stuff',
    },
  ];
  return (
    <>
      <Sidebar />
      <main className="bg-[#f8f8f8] w-main float-right overflow-hidden pb-8">
        <Joyride
          steps={steps}
          tooltipComponent={ProductTour}
          continuous
          floaterProps={{ offset: 0 }}
          disableOverlay
        />
        <div>
          <div className="bg-white h-[12.375rem]" />
          <div
            className="mx-auto mb-auto w-[60.313rem] grid grid-cols-4 place-items-center gap-y-5"
            style={{ marginTop: '-3.75rem' }}
          >
            <LinkCard
              id="first"
              text="Companies"
              url="/dashboard/companies"
              image="/images/companies final.svg"
            />
            <LinkCard
              id="second"
              text="Events"
              url="/dashboard/events"
              image="https://images.jumpstart.me/frontend/communities/Cover+Photo/Web/jobs-card.png"
            />
            <LinkCard
              id="third"
              text="Job Openings"
              url="/dashboard/job_openings"
              image="/images/trending openings.svg"
            />
            <LinkCard
              id="forth"
              text="Hiring Challenges"
              url="/dashboard/hiring_challenges"
              image="/images/hiring challenge final.svg"
            />
          </div>
          <JoinWaitlist />
          <Stats />
          <Section />

          {/* <div className="mx-auto mt-7 relative w-[59.375rem]"> */}
          <div className="mx-auto mt-7 relative w-[60.313rem]">
            <div className="bg-white rounded-2xl w-full h-[10.625rem] shadow">
              <h1 className="pt-0.5 mt-4 ml-7 mb-1.5 font-semibold inline-block text-[.95rem] leading-[1.375rem] text-[#033443]">
                Projects By Companies
              </h1>
              {/* <div className="flex flex-wrap justify-around"> */}
              <div className="flex flex-wrap justify-around px-4">
                <CompanyProduct />
                <CompanyProduct />
                <CompanyProduct />
                <CompanyProduct />
                <CompanyProduct />
                <CompanyProduct />
                <CompanyProduct />
                <CompanyProduct />
                <CompanyProduct />
                <CompanyProduct />
              </div>
            </div>
            <div className="mt-7 flex space-x-4">
              <div className="shadow-lg rounded-xl p-4 border min-w-[28.9rem] bg-white">
                <div className="font-medium text-sm text-gray-800 pb-2">
                  Currently we are experiencing a high volume of applications
                  and we will notify you once the dates are available
                </div>
                <div className="todo-container flex flex-col  h-full">
                  svg img
                </div>
              </div>
              <UpcomingInterviews />
            </div>
            <div className="mt-7 flex space-x-4">
              <Todo />
              <Analytics />
            </div>
            <Banner1 />
            <Banner2 />

            <Banner />
            <Opportunities />
            <WalletComponent />
            <QuestionsComponent />
            <Table />
          </div>
        </div>
      </main>
    </>
  );
};

export default UtilityBoard;
