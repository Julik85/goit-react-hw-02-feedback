import { SectionEl, Title } from './Section.styled';
import { Container } from './Container.styled';

export function Section({ title, children }) {
  return (
    <SectionEl>
      <Container>
        <Title>{title}</Title>
        {children}
      </Container>
    </SectionEl>
  );
}