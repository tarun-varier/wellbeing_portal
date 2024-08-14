import React from 'react';
import plImg from '../assets/placeholder-image.png';
import Header from '../Components/Header';

const ArticlePage = () => {
    return (
        <div>
            <Header />
            <img src={plImg} alt="" />
            <div className="w-full items-center">
                <h1 className="p-12 font-bold text-center"> Article Title </h1>
                <div className="text-lg w-3/4 mx-auto">
                    <p >
                        Lorem ipsum odor amet, consectetuer adipiscing elit. Tincidunt elementum sollicitudin litora dapibus ornare. Consectetur taciti leo maecenas massa platea condimentum metus viverra etiam. Odio senectus ornare a facilisi, convallis metus. Inceptos maximus taciti in tristique curae sapien aliquam congue sit. Torquent cubilia sed proin dignissim purus; penatibus dictumst arcu.
                    </p>
                    <p>
                        Lacinia lobortis sagittis fermentum; non facilisis quam montes lacus pretium. Dapibus ridiculus integer libero tristique nulla; montes praesent ultrices. Platea inceptos lectus penatibus, lorem nullam duis purus conubia ornare. Lectus turpis fusce senectus feugiat diam. Rutrum felis habitasse diam ac massa nibh platea. Turpis vivamus porta nibh class litora, adipiscing dapibus maximus magnis. Erat convallis sit feugiat taciti non magnis vel sem. Cras mollis egestas dignissim sodales consectetur natoque. Est interdum parturient non gravida tellus sapien dapibus libero. Ante duis enim facilisis pellentesque non morbi tellus scelerisque.
                    </p>
                    <p>
                        Non in mi semper sodales commodo id elit. Sollicitudin mus sociosqu et massa venenatis aliquet. Ut etiam elit nulla; porttitor urna pellentesque. Semper quis nostra ornare accumsan, ipsum accumsan. Bibendum curae et viverra dis justo per magna dignissim. Tortor vulputate laoreet nam senectus nisl arcu luctus proin. Montes ultrices pharetra ornare nunc eget adipiscing nibh et. Laoreet torquent sociosqu natoque amet habitasse inceptos maecenas phasellus.
                    </p>
                    <p>
                        Elit ad lectus pretium aptent nec sociosqu conubia tempor. Sem ipsum fermentum; nisi sollicitudin vitae accumsan tortor. Risus sapien gravida tempor litora fermentum magna. Rutrum duis purus magnis sagittis facilisi tempus dolor libero venenatis. Porttitor tempor gravida natoque natoque; pulvinar massa hac. Natoque euismod primis sem consequat dui; feugiat litora pretium. Natoque consectetur iaculis nisi dignissim auctor porta suspendisse. Primis egestas parturient suscipit tortor posuere egestas platea faucibus fusce. Curae aenean fringilla dignissim laoreet vitae.
                    </p>
                    <p>
                        Gravida velit morbi semper dolor nullam egestas proin ut. Felis pellentesque congue tellus; est neque suscipit. Sem in egestas lobortis dignissim ex molestie. Curabitur tristique dui magnis sollicitudin est pulvinar. Potenti nibh dignissim ad conubia; pellentesque facilisi et. Etiam tempor penatibus tempus; mollis suspendisse velit hac lacinia.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default ArticlePage;
