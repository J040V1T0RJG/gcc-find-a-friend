import {
  Button,
  Content,
  Form,
  FormWrapper,
  Header,
  InputWrapper,
  Wrapper,
} from './styles'
import logoImage from '@/assets/icons/logo.svg'
import exitImage from '@/assets/icons/exit.svg'

export function PetCreate() {
  return (
    <Wrapper>
      <Content>
        <Header>
          <div className="logoOrange">
            <img src={logoImage} alt="" />
          </div>
          <div className="infoHeader">
            <p>
              <strong>Seu cãozinho</strong>
              <br />
              Rua do meio, 123 , Boa viagem, Recife - PE
            </p>
            <button>
              <img src={exitImage} alt="" />
            </button>
          </div>
        </Header>
        <FormWrapper>
          <h1>Adicione um pet</h1>
          <Form>
            <label htmlFor="">Nome</label>
            <InputWrapper>
              <input type="text" />
            </InputWrapper>

            <label htmlFor="">Sobre</label>
            <InputWrapper>
              <textarea />
            </InputWrapper>

            <label htmlFor="">Idade</label>
            <InputWrapper>
              <input type="text" />
            </InputWrapper>

            <label htmlFor="">Porte</label>
            <InputWrapper>
              <input type="text" />
            </InputWrapper>

            <label htmlFor="">Nível de energia</label>
            <InputWrapper>
              <input type="text" />
            </InputWrapper>

            <label htmlFor="">Nível de independência</label>
            <InputWrapper>
              <input type="text" />
            </InputWrapper>

            <label htmlFor="">Ambiente</label>
            <InputWrapper>
              <input type="text" />
            </InputWrapper>

            <label htmlFor="">Fotos</label>
            <InputWrapper>
              <input type="text" />
            </InputWrapper>

            <h2>Adicione um pet</h2>

            <label htmlFor="">Requisito</label>
            <InputWrapper>
              <input type="text" />
            </InputWrapper>
          </Form>
          <Button>
            <p>Confirmar</p>
          </Button>
        </FormWrapper>
      </Content>
    </Wrapper>
  )
}
