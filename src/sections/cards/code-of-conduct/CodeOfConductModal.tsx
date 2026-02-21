import React from 'react';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';

interface CodeOfConductModalProps {
  open: boolean;
  onClose: () => void;
}

const modalStyle = {
  position: 'absolute' as const,
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: { xs: '95%', sm: 600, md: 800 },
  maxHeight: '90vh',
  overflowY: 'auto',
  bgcolor: 'background.paper',
  borderRadius: 4,
  boxShadow: 24,
  p: { xs: 4, sm: 6 },
  display: 'flex',
  flexDirection: 'column',
  outline: 'none',
};

export const CodeOfConductModal: React.FC<CodeOfConductModalProps> = ({
  open,
  onClose,
}) => {
  return (
    <Modal
      open={open}
      onClose={onClose}
      aria-labelledby='code-of-conduct-modal-title'
      aria-describedby='code-of-conduct-modal-description'
      disableScrollLock
    >
      <Box sx={modalStyle}>
        <IconButton
          onClick={onClose}
          sx={{ position: 'absolute', right: 16, top: 16 }}
          aria-label='Cerrar modal'
        >
          <CloseIcon />
        </IconButton>

        <Typography
          id='code-of-conduct-modal-title'
          variant='h4'
          component='h2'
          fontWeight='bold'
          gutterBottom
        >
          Código de Conducta
        </Typography>

        <Box id='code-of-conduct-modal-description' sx={{ mt: 2 }}>
          <Typography
            variant='h6'
            fontWeight='bold'
            sx={{ mt: 3, mb: 1, color: '#000000' }}
          >
            La versión más corta de todas
          </Typography>
          <Typography
            variant='body1'
            color='text.secondary'
            sx={{ lineHeight: 1.6 }}
          >
            ¿Has visto como luego de algunos eventos, todos terminan hablando de
            “aquella persona” que causó un mal rato a uno o más asistentes?. Que
            no sea de ti de quien hablen 🙂
          </Typography>

          <Typography
            variant='h6'
            fontWeight='bold'
            sx={{ mt: 4, mb: 1, color: '#000000' }}
          >
            La versión no tan corta
          </Typography>
          <Typography
            variant='body1'
            color='text.secondary'
            sx={{ lineHeight: 1.6 }}
          >
            En los eventos desarrollados por Javascript Chile (JSConf,
            TechSchool, Conferencias, etc), así como en cualquiera de las
            plataformas de redes sociales (Facebook, Slack, Discord, Twitter,
            etc) buscamos crear un espacio, y una experiencia, libre de acoso.
            Nuestro lema es que todos son bienvenidos, sin importar género,
            raza, orientación sexual, capacidades, apariencia física y/o
            creencias. No toleramos el acoso bajo ningún tipo, forma ni
            contexto, directa o indirectamente. Cualquier participante que viole
            estas reglas será sancionado y expulsado de este y futuros eventos.
          </Typography>

          <Typography
            variant='h6'
            fontWeight='bold'
            sx={{ mt: 4, mb: 1, color: '#000000' }}
          >
            La versión más larga ¿Qué se entiende por acoso?
          </Typography>
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
            <Typography
              variant='body1'
              color='text.secondary'
              sx={{ lineHeight: 1.6 }}
            >
              Abuso físico y/o verbal relacionados al género de una persona,
              orientación sexual, capacidades, género, apariencia física, nivel
              de conocimiento, raza y/o creencias religiosas. Adicionalmente,
              creación y/o reproducción de imágenes de contenido sexual en
              espacios públicos, intimidación física y/o verbal, acecho,
              interrupciones groseras de charlas y/o contacto físico
              inapropiado.
            </Typography>
            <Typography
              variant='body1'
              color='text.secondary'
              sx={{ lineHeight: 1.6 }}
            >
              La organización se reserva el derecho de solicitar que cualquier
              comportamiento relacionado a lo anterior que sea visto durante un
              evento, sea detenido inmediatamente por quien(es) lo realizan.
              Adicionalmente, quienes atenten contra este código de conducta,
              podrán ser expulsados de este y futuros eventos.
            </Typography>
            <Typography
              variant='body1'
              color='text.secondary'
              sx={{ lineHeight: 1.6 }}
            >
              Si eres víctima o testigo de algún tipo de acoso, de cualquiera
              según lo detallado anteriormente, por favor contacta a un miembro
              de la organización de forma inmediata. Los encargados del evento
              se identificarán oportunamente al comienzo de cada instancia. Si
              es necesario, la organización ayudará a contactar autoridades
              policiales y/o proveerá cualquier tipo de asistencia necesaria
              para remediar la situación.
            </Typography>
            <Typography
              variant='body1'
              color='text.secondary'
              sx={{ lineHeight: 1.6 }}
            >
              Somos una comunidad inclusiva que valora la diversidad. Si no
              estás de acuerdo con esto, probablemente no debas estar en
              nuestros eventos 😉
            </Typography>
          </Box>
        </Box>
      </Box>
    </Modal>
  );
};
