import React from 'react';
import styled from 'styled-components';
import * as Dialog from '@radix-ui/react-dialog';

import UnstyledButton from '../UnstyledButton';
import Icon from '../Icon';
import VisuallyHidden from '../VisuallyHidden';
import { COLORS } from '../../constants';

const MobileMenu = ({ isOpen, onDismiss }) => {
  return (
    <Dialog.Root open={isOpen} onOpenChange={onDismiss}>
      <Dialog.Portal>
        <Overlay />
        <Content>
          <button onClick={onDismiss}>Dismiss menu</button>
          <nav>
            <a href="/sale">Sale</a>
            <a href="/new">New&nbsp;Releases</a>
            <a href="/men">Men</a>
            <a href="/women">Women</a>
            <a href="/kids">Kids</a>
            <a href="/collections">Collections</a>
          </nav>
          <footer>
            <a href="/terms">Terms and Conditions</a>
            <a href="/privacy">Privacy Policy</a>
            <a href="/contact">Contact Us</a>
          </footer>
        </Content>
      </Dialog.Portal>
    </Dialog.Root>

    // <div>
    //   <button onClick={onDismiss}>Dismiss menu</button>
    //   <nav>
    //     <a href="/sale">Sale</a>
    //     <a href="/new">New&nbsp;Releases</a>
    //     <a href="/men">Men</a>
    //     <a href="/women">Women</a>
    //     <a href="/kids">Kids</a>
    //     <a href="/collections">Collections</a>
    //   </nav>
    //   <footer>
    //     <a href="/terms">Terms and Conditions</a>
    //     <a href="/privacy">Privacy Policy</a>
    //     <a href="/contact">Contact Us</a>
    //   </footer>
    // </div>
  );
};

const Overlay = styled(Dialog.Overlay)`
  position: fixed;
  inset: 0;
  background: hsl(220deg 5% 40% / 0.8);
`;

const Content = styled(Dialog.Content)`
  background: ${COLORS.white};
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  width: 300px;
  height: 100%;
`;

export default MobileMenu;
