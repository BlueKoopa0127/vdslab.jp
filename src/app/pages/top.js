import React from 'react'
import {Head} from '../head'

export const Top = () => <div>
  <Head subtitle='Top' />
  <div className='columns'>
    <div className='column'>
      <div className='content'>
        <h2>About</h2>
        <p>
          日本大学文理学部情報科学科 尾上研究室(vdslab)のWebサイトです。
          本研究室では、情報可視化とデータサイエンス(VDS; Visualization and Data Science)を中心テーマに研究開発を行います。
          大量で複雑なデータを闇雲に可視化・分析しても問題解決には役立ちません。
          可視化を通じて現実の問題に対して「深い洞察」を与えるような人とデータの対話を目指します。
        </p>
      </div>
      <div className='content'>
        <h2>News</h2>
        <div>
          準備中
        </div>
      </div>
    </div>
    <div className='column is-4'>
      <div className='content'>
        <h2>Links</h2>
      </div>
      <aside className='menu'>
        <p className='menu-label'>大学関係</p>
        <ul className='menu-list'>
          <li><a href='http://www.nihon-u.ac.jp/'>日本大学</a></li>
          <li><a href='https://www.chs.nihon-u.ac.jp/'>日本大学 文理学部</a></li>
          <li><a href='http://www.is.chs.nihon-u.ac.jp/'>日本大学 文理学部 情報科学科</a></li>
        </ul>
        <p className='menu-label'>Publications</p>
        <ul className='menu-list'>
          <li><a href='https://scholar.google.co.jp/citations?user=sdlDSdcAAAAJ&hl=ja'>Google Scholar</a></li>
          <li><a href='https://orcid.org/0000-0003-2739-3249'>ORCID</a></li>
        </ul>
        <p className='menu-label'>Products</p>
        <ul className='menu-list'>
          <li><a href='https://github.com/vdslab'>GitHub</a></li>
        </ul>
      </aside>
    </div>
  </div>
</div>