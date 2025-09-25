'use client';

import { LinkTo } from './styles';

const GetStartedButton = ({ padding, className }: { padding?: string; className?: string }) => {
  return (
    <LinkTo
      style={{
        padding: padding,
      }}
      href="/contact"
      className={className}
    >
      Rezervujte si termín
    </LinkTo>
  );
};

export default GetStartedButton;
