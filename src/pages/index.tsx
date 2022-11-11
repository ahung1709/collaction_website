import Image from 'next/image';
import PageSEO from 'src/components/PageSEO';
import InfoCard from 'src/components/InfoCard';
import AppLinkApple from 'src/components/AppLinkApple';
import AppLinkGoogle from 'src/components/AppLinkGoogle';

import CrowdActionGraphic from 'public/crowdaction_graphic.png';
import CommitmentOptionsGraphic from 'public/commitment_options_graphic.png';
import AchievementGraphic from 'public/achievement_graphic.png';
import DownloadImg from 'public/download_app.png';
import HeroImg from 'public/uilenstede_banner.png';

import TomTomImg from 'public/actions/tomtom.png';
import CollActionExplanation, {
  Step,
} from 'src/components/CollActionExplanation';
import TwoColumnSection from 'src/components/TwoColumnSection';

import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { InferGetStaticPropsType } from 'next';

export async function getStaticProps({ locale }: { locale: string }) {
  return {
    props: {
      locale,
      ...(await serverSideTranslations(locale, ['common', 'home'])),
    },
  };
}

export default function HomePage(
  _props: InferGetStaticPropsType<typeof getStaticProps>
) {
  const { t } = useTranslation();

  return (
    <>
      <PageSEO title="CollAction | Sustainable choices made easy" />

      <main className="bg-secondary">
        {/* HERO SETION */}
        <div className="min-h-[520px] md:min-h-[70vh] w-full relative">
          <Image
            src={HeroImg}
            alt="hero image"
            fill
            style={{ objectFit: 'cover' }}
          />
          <div className="w-full absolute bottom-8 md:bottom-20 px-6 md:px-20">
            <h1 className="text-collaction text-7xl">{t('home:hero.title')}</h1>
            <p className="text-collaction pt-5">{t('home:hero.description')}</p>
          </div>
        </div>

        {/* CROWDACTION EXPLANATION SECTION */}
        <div className="bg-white py-8">
          <div className="flex flex-wrap justify-center mx-auto max-w-7xl">
            <CollActionExplanation
              step={Step.GOAL}
              title={
                <div className="text-2xl font-bold">
                  <span>Step 1: </span>
                  <span className="text-collaction">
                    {t('common:collActionExplanation.goal.title')}
                  </span>
                </div>
              }
              description={t('common:collActionExplanation.goal.description')}
            />
            <CollActionExplanation
              step={Step.CROWD}
              title={
                <div className="text-2xl font-bold">
                  <span>Step 2: </span>
                  <span className="text-collaction">
                    {t('common:collActionExplanation.crowd.title')}
                  </span>
                </div>
              }
              description={t('common:collActionExplanation.crowd.description')}
            />
            <CollActionExplanation
              step={Step.ACTION}
              title={
                <div className="text-2xl font-bold">
                  <span>Step 3: </span>
                  <span className="text-collaction">
                    {t('common:collActionExplanation.action.title')}
                  </span>
                </div>
              }
              description={t('common:collActionExplanation.goal.action')}
            />
          </div>
        </div>

        {/* DOWNLOAD APP SETION */}
        <TwoColumnSection
          isReverseOrder={false}
          first={
            <Image src={DownloadImg} alt="Download App" className="mx-auto" />
          }
          second={
            <InfoCard
              className="absolute top-[50%] left-[50%] transform translate-y-[-50%] translate-x-[-50%]"
              isSecondaryBg
              title={t('common:downloadApp.title')}
              body={t('common:downloadApp.description')}
            >
              <div className="flex justify-center mb-6">
                <AppLinkApple className="mr-4 sm:mr-5" />
                <AppLinkGoogle />
              </div>
            </InfoCard>
          }
        />

        {/* CROWDACTION SECTION */}
        <TwoColumnSection
          isReverseOrder={true}
          isWhiteBg={true}
          mobile={
            <InfoCard
              title={t('home:crowdActionSection.title')}
              body={t('home:crowdActionSection.description')}
              className="mx-auto"
            >
              <Image src={CrowdActionGraphic} alt="Crowdaction Card" />
            </InfoCard>
          }
          first={
            <Image
              src={CrowdActionGraphic}
              alt="CrowdAction"
              className="absolute top-[50%] left-[50%] transform translate-y-[-50%] translate-x-[-50%]"
            />
          }
          second={
            <InfoCard
              className="absolute top-[50%] left-[50%] transform translate-y-[-50%] translate-x-[-50%]"
              hasBg={false}
              leftAlign={true}
              title={t('home:crowdActionSection.title')}
              body={t('home:crowdActionSection.description')}
            />
          }
        />

        {/* COMMITMENTOPTIONS SECTION */}
        <TwoColumnSection
          isWhiteBg={false}
          mobile={
            <InfoCard
              title={t('home:commitmentOptionsSection.title')}
              body={t('home:commitmentOptionsSection.description')}
              className="mx-auto"
            >
              <Image src={CommitmentOptionsGraphic} alt="Crowdaction Card" />
            </InfoCard>
          }
          first={
            <Image
              src={CommitmentOptionsGraphic}
              alt="Commitment Options"
              className="absolute top-[50%] left-[50%] transform translate-y-[-50%] translate-x-[-50%]"
            />
          }
          second={
            <InfoCard
              title={t('home:commitmentOptionsSection.title')}
              body={t('home:commitmentOptionsSection.description')}
              className="absolute top-[50%] left-[50%] transform translate-y-[-50%] translate-x-[-50%]"
              leftAlign={true}
              hasBg={false}
            />
          }
        />

        {/* IMPACT SECTION */}
        <TwoColumnSection
          isReverseOrder={true}
          isWhiteBg={true}
          mobile={
            <InfoCard
              title="See the impact we make together"
              body="Alone we are a drop in the ocean – together we make waves. CollAction always shows you how much of an environmental impact all participants of a CrowdAction have made collectively."
              className="flex flex-col lg:flex-row lg:items-center"
            >
              <div className="lg:w-11/12 -mb-9">
                <Image src={AchievementGraphic} alt="Impact Card" />
              </div>
            </InfoCard>
          }
          first={
            <Image
              src={AchievementGraphic}
              alt="Achievement"
              className="absolute top-[50%] left-[50%] transform translate-y-[-50%] translate-x-[-50%] h-[90%] w-[70%]"
            />
          }
          second={
            <InfoCard
              className="absolute top-[50%] left-[50%] transform translate-y-[-50%] translate-x-[-50%]"
              hasBg={false}
              leftAlign={true}
              title={t('home:impactSection.title')}
              body={t('home:impactSection.description')}
            />
          }
        />

        {/* USE COLLACTION SECTION */}
        <div
          className="pt-16 relative text-center mx-auto xs:max-w-350 sm:max-w-400 lg:max-w-600 rounded-none xs:rounded-1"
          style={{ height: 450 }}
        >
          <div className="absolute h-full w-full rounded-none xs:rounded-1">
            <Image
              src={TomTomImg}
              alt="CollAction Team"
              layout="fill"
              objectFit="cover"
              className="rounded-none xs:rounded-1"
            />
          </div>
          <div
            className="absolute h-full w-full rounded-none xs:rounded-1"
            style={{
              background:
                'linear-gradient(180deg, rgba(255, 255, 255, 0) 22.92%, rgba(0, 0, 0, 0.6) 75%)',
            }}
          />

          <div className="absolute bottom-0 left-0 right-0 mb-9 mx-auto text-center w-full px-5 xs:max-w-350 sm:max-w-400 lg:max-w-600">
            <h4 className="text-headline-lg-1 text-secondary mb-6">
              {t('home:useCollActionSection.title')}
            </h4>
            <p className="text-body-short-1 text-secondary">
              {t('home:useCollActionSection.description')}
            </p>
          </div>
        </div>
        <div className="pb-24"></div>
      </main>
    </>
  );
}
