import React from 'react'
import PageContent from '../components/PageContent'
import {useRouteError} from 'react-router-dom';

function Error() {
  const error = useRouteError()
  let title="um erro foi encontrado"
  let message= 'Algo deu muito errado'
  if (error.status === 500){
    message=JSON.parse(error.data).message
  }

  if (error.status === 404){
    title="A rota não existe"
    message="não foi possivel encontrar os dados"
  }
  return (
    <PageContent
      title={title}
    >
      <p>{message}</p>
    </PageContent>
  )
}

export default Error