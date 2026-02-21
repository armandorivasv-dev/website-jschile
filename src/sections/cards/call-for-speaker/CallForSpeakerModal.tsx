import React, { useState } from 'react';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import Alert from '@mui/material/Alert';
import CircularProgress from '@mui/material/CircularProgress';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { sendSpeakerPostulation } from '@/actions/sendSpeakerPostulation';
import {
  speakerPostulationSchema,
  SpeakerPostulationFormValues,
} from '@/schemas/speakerPostulation';

interface CallForSpeakerModalProps {
  open: boolean;
  onClose: () => void;
}

const modalStyle = {
  position: 'absolute' as const,
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: { xs: '95%', sm: 500, md: 600 },
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

export const CallForSpeakerModalForm: React.FC<CallForSpeakerModalProps> = ({
  open,
  onClose,
}) => {
  const [alertInfo, setAlertInfo] = useState<{
    type: 'success' | 'error';
    message: string;
  } | null>(null);

  // Inicializamos React Hook Form con la validación de Zod conectada
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<SpeakerPostulationFormValues>({
    resolver: zodResolver(speakerPostulationSchema),
    defaultValues: {
      nombre: '',
      email: '',
      evento: '',
      titulo: '',
      descripcion: '',
    },
  });

  const onSubmit = async (data: SpeakerPostulationFormValues) => {
    setAlertInfo(null);

    // Transformamos los datos estructurados a FormData para el Server Action
    const formData = new FormData();
    Object.entries(data).forEach(([key, value]) => {
      formData.append(key, value || '');
    });

    try {
      const result = await sendSpeakerPostulation(null, formData);

      if (result.success) {
        setAlertInfo({ type: 'success', message: result.message });
        reset(); // RHF limpia el form
        setTimeout(() => {
          onClose();
          setAlertInfo(null);
        }, 3000);
      } else {
        setAlertInfo({ type: 'error', message: result.message });
      }
    } catch (error) {
      console.error(error);
      setAlertInfo({
        type: 'error',
        message: 'Error catastrófico en la postulación',
      });
    }
  };

  const handleClose = () => {
    setAlertInfo(null);
    onClose();
  };

  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby='call-for-speaker-modal-title'
      aria-describedby='call-for-speaker-modal-description'
      disableScrollLock
    >
      <Box sx={modalStyle}>
        <IconButton
          onClick={handleClose}
          sx={{ position: 'absolute', right: 16, top: 16 }}
          aria-label='Cerrar modal'
          disabled={isSubmitting}
        >
          <CloseIcon />
        </IconButton>

        <Typography
          id='call-for-speaker-modal-title'
          variant='h4'
          component='h2'
          fontWeight='bold'
          gutterBottom
          sx={{ pr: 3 }}
        >
          Postular como Speaker
        </Typography>

        <Typography
          variant='body1'
          color='text.secondary'
          sx={{ mb: 4, lineHeight: 1.6 }}
        >
          ¡Nos encantaría escucharte! Completa el siguiente formulario para
          enviarnos tu propuesta de charla para futuros eventos de la comunidad.
        </Typography>

        {alertInfo?.message && (
          <Alert severity={alertInfo.type} sx={{ mb: 3 }}>
            {alertInfo.message}
          </Alert>
        )}

        <form onSubmit={handleSubmit(onSubmit)} noValidate>
          <Stack spacing={3}>
            <TextField
              label='Tu Nombre'
              variant='outlined'
              fullWidth
              disabled={isSubmitting}
              {...register('nombre')}
              error={!!errors.nombre}
              helperText={errors.nombre?.message}
            />
            <TextField
              label='Correo Electrónico'
              type='email'
              variant='outlined'
              fullWidth
              disabled={isSubmitting}
              {...register('email')}
              error={!!errors.email}
              helperText={errors.email?.message}
            />
            <TextField
              label='Evento en el que quieres participar (Opcional)'
              placeholder='Ej: Próximo meetup, JSConf, etc.'
              variant='outlined'
              fullWidth
              disabled={isSubmitting}
              {...register('evento')}
              error={!!errors.evento}
              helperText={errors.evento?.message}
            />
            <TextField
              label='Título de la Charla'
              variant='outlined'
              fullWidth
              disabled={isSubmitting}
              {...register('titulo')}
              error={!!errors.titulo}
              helperText={errors.titulo?.message}
            />
            <TextField
              label='Descripción o Resumen de la charla'
              variant='outlined'
              fullWidth
              multiline
              rows={4}
              disabled={isSubmitting}
              {...register('descripcion')}
              error={!!errors.descripcion}
              helperText={errors.descripcion?.message}
            />

            <Button
              type='submit'
              variant='contained'
              color='primary'
              size='large'
              fullWidth
              sx={{ mt: 2 }}
              disabled={isSubmitting}
              startIcon={
                isSubmitting ? (
                  <CircularProgress size={20} color='inherit' />
                ) : null
              }
            >
              {isSubmitting ? 'Enviando...' : 'Enviar Propuesta'}
            </Button>
          </Stack>
        </form>
      </Box>
    </Modal>
  );
};
