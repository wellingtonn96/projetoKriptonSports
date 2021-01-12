import React, { useCallback, useState } from 'react';
import { Link } from 'react-router-dom';
import {
  MdCreate,
  MdDeleteForever,
  MdMoreHoriz,
  MdVisibility,
} from 'react-icons/md';
import { useModal } from '../../../hooks/Modal';

import { Container, Action } from './style';

const TableAction: React.FC = () => {
  const [visible, setVisible] = useState(false);
  const { comfirmAlert } = useModal();

  const comrimDelete = useCallback(() => {
    comfirmAlert({
      title: 'Deletar produto!',
      description: 'Deseja realmente deletar produto',
      button: {
        onClick: () => alert('comfirmar deletar'),
        title: 'deletar',
      },
    });
  }, [comfirmAlert]);

  return (
    <>
      <Container>
        <button type="button" onClick={() => setVisible((prev) => !prev)}>
          <MdMoreHoriz size={22} color="#c6c6c6" />
        </button>

        <Action visible={visible}>
          <div>
            <button type="button">
              <MdVisibility size={18} color="#4D85EE" />
              Visualizar
            </button>
          </div>
          <div>
            <Link to="/">
              <MdCreate size={18} color="yellow" />
              Editar
            </Link>
          </div>
          <div>
            <button type="button" onClick={comrimDelete}>
              <MdDeleteForever size={18} color="#DE3B3B" />
              Excluir
            </button>
          </div>
        </Action>
      </Container>
    </>
  );
};

export default TableAction;