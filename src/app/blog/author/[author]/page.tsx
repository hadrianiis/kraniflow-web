import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { getBlogPostsByAuthor } from '@/lib/blog';
import BlogGrid from '@/components/UI/Blog/BlogGrid';
import {
  Container,
  HeroSection,
  HeroContent,
  AuthorAvatarContainer,
  AuthorAvatar,
  HeroTitle,
  HeroSubtitle,
  AuthorBio,
  AuthorBioText,
  ContentSection
} from './styles';

interface AuthorPageProps {
  params: {
    author: string;
  };
}

export async function generateMetadata({ params }: AuthorPageProps): Promise<Metadata> {
  const posts = await getBlogPostsByAuthor(params.author);
  
  if (posts.length === 0) {
    return {
      title: 'Autor nenájdený | Raft Blog',
    };
  }

  const authorName = decodeURIComponent(params.author);

  return {
    title: `Články autora ${authorName} | Raft Blog`,
    description: `Objavte všetky články autora ${authorName} na našom blogu o finančnom plánovaní a investovaní.`,
    keywords: `${authorName}, autor, blog, finančné poradenstvo, investovanie`,
    openGraph: {
      title: `Články autora ${authorName} | Raft Blog`,
      description: `Objavte všetky články autora ${authorName} na našom blogu.`,
      type: 'profile',
    },
  };
}

export default async function AuthorPage({ params }: AuthorPageProps) {
  const posts = await getBlogPostsByAuthor(params.author);
  const authorName = decodeURIComponent(params.author);
  
  if (posts.length === 0) {
    notFound();
  }

  const author = posts[0]; // Get first post to extract author info

  return (
    <Container>
      {/* Hero Section */}
      <HeroSection>
        <HeroContent>
          <AuthorAvatarContainer>
            <AuthorAvatar
              src={author.authorAvatar}
              alt={author.author}
            />
          </AuthorAvatarContainer>
          
          <HeroTitle>
            {author.author}
          </HeroTitle>
          
          <HeroSubtitle>
            {posts.length} článkov na našom blogu
          </HeroSubtitle>
          
          <AuthorBio>
            <AuthorBioText>
              Expert na finančné poradenstvo s viac ako 15-ročnými skúsenosťami. 
              Špecializuje sa na investičné stratégie, dôchodkové plánovanie a daňové optimalizácie.
            </AuthorBioText>
          </AuthorBio>
        </HeroContent>
      </HeroSection>
      
      {/* Blog Grid */}
      <ContentSection>
        <BlogGrid initialPosts={posts} showFilters={false} />
      </ContentSection>
    </Container>
  );
} 