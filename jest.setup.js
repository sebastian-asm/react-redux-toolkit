import 'whatwg-fetch'
import dotenv from 'dotenv'

dotenv.config()

// configuracion para utilizar los .env de vite
jest.mock('./src/helpers/getEnvironments', () => ({
  // eslint-disable-next-line no-undef
  getEnvironments: () => ({ ...process.env })
}))
