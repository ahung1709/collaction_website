import React from 'react';
import Image from 'next/image';

import PageSEO from 'src/components/PageSEO';
import InfoCard from 'src/components/InfoCard';
import AppLinkApple from 'src/components/AppLinkApple';
import AppLinkGoogle from 'src/components/AppLinkGoogle';
import ImageMasonry from 'src/components/ImageMasonry';

import SteunSchool_banner from 'public/sjs_banner_3imgs.jpg';

import img1 from 'public/sjs/sjs1.jpg';
import img2 from 'public/sjs/sjs2.jpg';
import img3 from 'public/sjs/sjs3.jpg';
import img4 from 'public/sjs/sjs4.jpg';
import img5 from 'public/sjs/sjs5.jpg';
import img6 from 'public/sjs/sjs6.jpg';
import img8 from 'public/sjs/sjs8.jpg';
import img9 from 'public/sjs/sjs9.jpg';
import img10 from 'public/sjs/sjs10.jpg';
import img11 from 'public/sjs/sjs11.jpg';
import img12 from 'public/sjs/sjs12.jpg';
import img13 from 'public/sjs/sjs13.jpg';
import img14 from 'public/sjs/sjs14.jpeg';
import img15 from 'public/sjs/sjs15.jpeg';

export default function UilenstedeIndexPage() {
  return (
    <>
      <PageSEO title="CollAction op School | Steun je School" />

      <main className="mt-8 mb-12">
        <section>
          <div className="text-center mx-auto max-w-700 sm:max-w-400 lg:max-w-600">
            <h1 className="text-collaction text-center mb-8">
              Steun je School
            </h1>
          </div>

          <div className="relative block w-full md:w-11/12 lg:w-208 mx-auto">
            <Image
              priority
              src={SteunSchool_banner}
              alt="SteunSchool banner"
              className="rounded-1"
              sizes="(max-width: 768px) 90vw, 830px"
              placeholder="blur"
            />
          </div>
          <div className="mx-auto w-full max-w-536 sm:max-w-600 md:max-w-600 lg:max-w-600 py-5 px-5">
            <h4 className="text-collaction mt-6 mb-2">
              Wat houdt de actie in?
            </h4>
            <p className="mb-2">
              Op 1 februari start een groep basisscholen aan de actie 'Steun je
              School'. Tijdens deze actie creëren we de gehele maand februari
              bewustwording bij kinderen, gezinnen en ieder ander rondom het
              thema energie. Dit kan door de thermostaat lager te zetten, korter
              te douchen of op andere wijze energie te besparen. Of het nu opa's
              en oma's zijn die warme sjaals breien, of de buren die kleedjes
              uitlenen aan de school. Centraal staat dat iedereen op zijn of
              haar manier kan meedoen: Steun je School en bespaar energie!
            </p>
            <h4 className="text-collaction mt-6 mb-2">
              Waarom zou ik meedoen?
            </h4>
            <p className="mb-2">
              Meedoen aan de actie kan om allerlei verschillende redenen. We
              hebben er een paar voor u opgesomd:
            </p>
            <ul style={{ listStyleType: 'disc' }} className="pl-7">
              <li className="mb-2">
                Minder uitstoot - dat is goed voor het klimaat
              </li>
              <li className="mb-2">Leer kinderen bewust omgaan met energie</li>
              <li className="mb-2">Nieuwe intiatieven in uw omgeving</li>
              <li className="mb-2">Bespaar op uw energierekening</li>
            </ul>
            <h4 className="text-collaction mt-6 mb-2">Hoe kan ik meedoen?</h4>
            <p className="mb-2">
              Iedereen kan op zijn of haar manier deelnemen aan de actie.
              Afhankelijk van uw situatie kiest u 1 of meerdere van de volgende
              opties:
            </p>

            <ul style={{ listStyleType: 'disc' }} className="pl-7 mb-2">
              <li className="mb-2">
                <strong>School:</strong> als school kunt u zich opgeven voor de
                actie door te mailen naar school@collaction.org.
              </li>
              <li className="mb-2">
                <strong>Gezin/Buurtgenoot:</strong> als gezin/buurgenoot kunt u
                zich opgeven door de CollActin-app te downloaden en daar aan te
                geven hoe u wilt deelnemen. Tevens kunt u contact opnemen met de
                basisschool van uw kind/buurt om te kijken wat u nog meer kunt
                doen.
              </li>
              <li className="mb-2">
                <strong>Bedrijf/Organisatie:</strong> wilt u als
                bedrijf/organisatie dit project ondersteunen? Bijvoorbeeld door
                warme kleden uit te lenen, de school te sponsoren, of op andere
                wijze? Neem dan contact op met school@collaction.org.
              </li>
            </ul>
          </div>
        </section>

        <section>
          <div className="mx-auto w-full max-w-536 sm:max-w-600 md:max-w-600 lg:max-w-600 px-5">
            <h4 className="text-collaction mt-2 mb-6">Actiefoto's</h4>
          </div>
          <div className="pb-10 w-full md:w-11/12 lg:w-208 mx-auto">
            <ImageMasonry
              columnsCountBreakPoints={{ 320: 1, 640: 2, 960: 3, 1280: 4 }}
              gutter="10px"
              images={[
                img1,
                img2,
                img3,
                img4,
                img5,
                img6,
                img8,
                img11,
                img9,

                img10,
                img12,
                img13,
                img14,
                img15,
              ]}
            />
          </div>
        </section>

        <section>
          <InfoCard
            isSecondaryBg
            title="Download de app"
            body="Schrijf je in en steun je school!"
          >
            <div className="flex justify-center">
              <AppLinkApple className="mr-4 sm:mr-5" />
              <AppLinkGoogle />
            </div>
          </InfoCard>
        </section>
      </main>
    </>
  );
}
