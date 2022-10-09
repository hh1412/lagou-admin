import SMERouter from 'sme-router'
import { signin, index } from '../controllers'

const router = new SMERouter('root')

router.route('/', signin(router))

router.route('/index', index(router))

// router.route('/signin', index(router))
export default router