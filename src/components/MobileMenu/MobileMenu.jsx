import React from 'react';
import styled from 'styled-components';
import * as Dialog from '@radix-ui/react-dialog';

import UnstyledButton from '../UnstyledButton';
import Icon from '../Icon';
import VisuallyHidden from '../VisuallyHidden';
import { COLORS, WEIGHTS } from '../../constants';

const MobileMenu = ({ isOpen, onDismiss }) => {
  return (
    <Dialog.Root open={isOpen} onOpenChange={onDismiss}>
      <Dialog.Portal>
        <Overlay />
        <Content>
          <CloseButton asChild>
            <UnstyledButton>
              <Icon id="close" />
              <VisuallyHidden>Close</VisuallyHidden>
            </UnstyledButton>
          </CloseButton>
          <Filler />
          <Nav>
            <NavLink href="/sale">Sale</NavLink>
            <NavLink href="/new">New&nbsp;Releases</NavLink>
            <NavLink href="/men">Men</NavLink>
            <NavLink href="/women">Women</NavLink>
            <NavLink href="/kids">Kids</NavLink>
            <NavLink href="/collections">Collections</NavLink>
          </Nav>
          <Footer>
            <FooterLink href="/terms">Terms and Conditions</FooterLink>
            <FooterLink href="/privacy">Privacy Policy</FooterLink>
            <FooterLink href="/contact">Contact Us</FooterLink>
          </Footer>
        </Content>
      </Dialog.Portal>
    </Dialog.Root>
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
  display: flex;
  flex-direction: column;
  padding: 32px 32px;
`;

const CloseButton = styled(Dialog.Close)`
  position: absolute;
  top: 26px;
  right: 16px;
`;

const Filler = styled.div`
  flex: 1;
`;

const Nav = styled.nav`
  display: flex;
  flex-direction: column;
  gap: 22px;
`;

const NavLink = styled.a`
  font-size: 1.125rem;
  text-transform: uppercase;
  text-decoration: none;
  color: ${COLORS.gray[900]};
  font-weight: ${WEIGHTS.medium};

  &:first-of-type {
    color: ${COLORS.secondary};
  }
`;

const Footer = styled.footer`
  display: flex;
  flex-direction: column;
  flex: 1;
  justify-content: flex-end;
  gap: 14px;
`;

const FooterLink = styled.a`
  font-size: 0.875rem;
  color: ${COLORS.gray[700]};
  text-decoration: none;
  font-weight: ${WEIGHTS.normal};
`;

export default MobileMenu;
