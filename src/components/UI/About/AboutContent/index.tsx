'use client';
import Image from 'next/image';
import { Wrapper, ContentSection, TextContent, ImageContainer, Title, Description } from './styles';

const AboutContent = () => {
  return (
    <Wrapper>
      {/* Prvá sekcia - text vľavo, fotka vpravo */}
      <ContentSection $isReversed={false}>
        <TextContent>
          <Title>O mne</Title>
          <Description>
            Volám sa Kristína Švantnerová a som terapeutka a masérka, ktorá spája prístup z rôznych oblastí a ponúka unikátnu personalizovanú techniku. KranioFlow vzniklo, aby sme našli s každým klientom jeho osobný flow a odľahčili jeho organizmus.
          </Description>
          <Description>
            S viac ako 4-ročnou praxou v kraniosakrálnej terapii a 14-ročnou praxou s masážami vám ponúkam holistický prístup k vašim problémom. Kombinujem rôzne techniky, ktoré poskytujú komplexné riešenie na fyzickej aj psychickej úrovni.
          </Description>
        </TextContent>
        <ImageContainer $isLongImage={false} className="about-image-container lcp-optimized">
          <Image
            src="/images/kika-about.avif"
            alt="Kika v praxi - kraniosakrálna terapia"
            fill
            style={{ objectFit: 'cover' }}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            priority
            quality={90}
            fetchPriority="high"
            placeholder="blur"
            blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCdABmX/9k="
            className="about-image"
          />
        </ImageContainer>
      </ContentSection>

      {/* Druhá sekcia - fotka vľavo, text vpravo, dlhá fotka */}
      <ContentSection $isReversed={true}>
        <TextContent>
          <Title>Moja cesta</Title>
          <Description>
            Môj záujem o ľudské telo začal už veľmi dávno. Už v 14tich rokoch som začala so vzdelávaním v masážach a fyziotechnikách popri škole. Ku kraniosakrálnej terapii som sa dostala pred niekoľkými rokmi, keď som sama pre seba hľadala metódu, ktorá mi pomôže na fyzickej aj psychickej úrovni. Objavila som silu jemného dotyku a jeho schopnosť podporiť prirodzené procesy hojenia v tele. Po rokoch štúdia a praxe som sa stala certifikovanou terapeutkou s hlbokým porozumením biodynamických princípov.
          </Description>
          <Description>
            Venujem sa poskytovaniu bezpečného a podporného priestoru pre mojich klientov, kde môžu prežiť hlboké uvoľnenie a obnovu. Verím, že každý z nás má v sebe prirodzenú schopnosť hojenia, a mojou úlohou je podporiť tento proces, či už masážou alebo BCS terapiou.
          </Description>
        </TextContent>
        <ImageContainer $isLongImage={true} className="about-image-container lcp-optimized">
          <Image
            src="/images/kika-spine.webp"
            alt="Kraniosakrálna terapia - detail chrbta"
            fill
            style={{ objectFit: 'cover', objectPosition: 'center top' }}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            quality={90}
            priority
            fetchPriority="high"
            placeholder="blur"
            blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCdABmX/9k="
            className="about-image"
          />
        </ImageContainer>
      </ContentSection>
    </Wrapper>
  );
};

export default AboutContent;
