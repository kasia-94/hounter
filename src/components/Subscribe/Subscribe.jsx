import {
  Button,
  Form,
  Icon,
  Input,
  InputBox,
  Section,
  Title,
} from './Subscribe.styled';
import mail from '../../assets/Subscribe/mail.svg';

export const Subscribe = () => {
  return (
    <Section>
      <Title>subscribe for more info and update from hounter</Title>
      <Form>
        <InputBox>
          <Icon src={mail} alt="mail" />
          <Input type="email" placeholder="Your email here" />
        </InputBox>
        <Button>Subsribe Now</Button>
      </Form>
    </Section>
  );
};
