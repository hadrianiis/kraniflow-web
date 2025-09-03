import Link from 'next/link';
import { LinkTo } from './styles';

const GetStartedButton = ({ padding }: { padding: string }) => {
  return (
    <LinkTo
      style={{
        padding: padding,
      }}
      href="/contact"
    >
      Rezervujte si termín
    </LinkTo>
  );
};

export default GetStartedButton;
