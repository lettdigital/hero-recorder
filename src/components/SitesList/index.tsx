import React from 'react'

import { Container, Image, Text, Button } from './styles'
import { ipcRenderer } from 'electron';
const SitesList: React.FC = () => {
  return (
    <Container>
      <Button onClick={() => ipcRenderer.send('loadNewUrl', "http://twitter.com")}>
        <Image
          src="https://upload.wikimedia.org/wikipedia/pt/thumb/3/3d/Twitter_logo_2012.svg/1200px-Twitter_logo_2012.svg.png"
          alt="Twitter logo"
        />
      </Button>
      <Button onClick={() => ipcRenderer.send('loadNewUrl', "http://youtube.com")}>
        <Image
          src="https://icons-for-free.com/iconfiles/png/512/video+youtube+icon-1320192294490006733.png"
          alt="Youtube logo"
        />
      </Button>
      <Button onClick={() => ipcRenderer.send('loadNewUrl', "http://google.com")}>
        <Image
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/1004px-Google_%22G%22_Logo.svg.png"
          alt="Google logo"
        />
      </Button>
    </Container>
  )
}

export default SitesList
