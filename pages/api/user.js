import getUser from '../../utils/getUser';

const apiGetUser = async (req, res) => {
    const data = await getUser('rafaelyamauchi');
    res.send(data);
}

export default apiGetUser;