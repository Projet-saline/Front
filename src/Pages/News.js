import React from "react";


const News = () => {
    return (
        <>
            <div className="news">
                <h2 className="news-title">News</h2>
                <div className="news-list">
                    <div className="news-item">
                        <h3 className="news-item-title">Titre de l'article</h3>
                        <p className="news-item-date">Date de publication</p>
                        <p className="news-item-content">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec euismod, nunc a aliquet lacinia, augue velit ultricies lorem, vitae aliquam nisi velit vel sem. Nulla facilisi. Sed euismod, sapien vitae tincidunt aliquam, magna urna tincidunt justo, vitae aliquet mi nisl nec nisl. Sed non nunc nec nunc aliquet sagittis. Nunc vitae nibh in nisl aliquet aliquet. Donec vel nisi vitae nunc aliquet ultricies. In hac habitasse platea dictumst. Sed non nunc nec nunc aliquet sagittis. Nunc vitae nibh in nisl aliquet aliquet. Donec vel nisi vitae nunc aliquet ultricies. In hac habitasse platea dictumst.</p>
                        <a className="news-item-link" href="/article/1">Lire la suite</a>
                    </div>
                    <div className="news-item">
                        <h3 className="news-item-title">Titre de l'article</h3>
                        <p className="news-item-date">Date de publication</p>
                        <p className="news-item-content">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec euismod, nunc a aliquet lacinia, augue velit ultricies lorem, vitae aliquam nisi velit vel sem. Nulla facilisi. Sed euismod, sapien vitae tincidunt aliquam, magna urna tincidunt justo, vitae aliquet mi nisl nec nisl. Sed non nunc nec nunc aliquet sagittis. Nunc vitae nibh in nisl aliquet aliquet. Donec vel nisi vitae nunc aliquet ultricies. In hac habitasse platea dictumst. Sed non nunc nec nunc aliquet sagittis. Nunc vitae nibh in nisl aliquet aliquet. Donec vel nisi vitae nunc aliquet ultricies
                        </p>
                        <a className="news-item-link" href="/article/2">Lire la suite</a>
                    </div>
                
                </div>
            </div>
        </>
    );
}

export default News;