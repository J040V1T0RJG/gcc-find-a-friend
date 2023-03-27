import styled from 'styled-components'

export const Container = styled.aside`
  width: 24.5rem;
  height: 100vh;
  background-color: ${(props) => props.theme.carnation};
`

export const AsideHeader = styled.div`
  height: 15rem;
  background-color: #e44449;

  & > div {
    padding: 5rem 3.5rem 1.625rem;
    display: flex;
    flex-direction: column;
    gap: 1.625rem;

    > img {
      width: 2.75rem;
    }
  }
`

export const HeaderInput = styled.div`
  display: flex;
  width: 18.5rem;
  gap: 0.75rem;
`

export const AsideContent = styled.div`
  height: calc(100vh - 15rem);
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  padding: 2.25rem 3.5rem;
`

export const ContentHeader = styled.h1`
  font-size: 1.25rem;
  line-height: 34px;
  margin-bottom: 1.75rem;
`

export const ContentFilters = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1.875rem;
`
