// @flow

import React from 'react'
import { Link } from 'react-router-dom'

import { ROUTES } from '../../../../core/constants'
import TextInput from '../../../Inputs/TextInput'
import CopyToClipboard from '../../../CopyToClipboard'
import LogoWithStrikethrough from '../../../LogoWithStrikethrough'
import styles from './ZeroAssets.scss'

const ZeroAssets = ({ address }: { address: string }) => (
  <section className={styles.zeroAssets}>
    <div className={styles.emptyBalanceContainer}>
      <p>
        You’ll need to <b>transfer compatible NEP-5 assets</b> to this wallet
        using{' '}
        <Link id="receive-link" to={ROUTES.RECEIVE}>
          <span> Receive </span>
        </Link>{' '}
        or your public address:
      </p>
      <div className={styles.address}>
        <TextInput value={address} disabled />
        <CopyToClipboard
          className={styles.copy}
          text={address}
          tooltip="Copy Public Address"
        />
      </div>
      <LogoWithStrikethrough />
    </div>
  </section>
)

export default ZeroAssets
