import React, { useState } from 'react';
import { Copy, Check, Mail, Phone, Send } from 'lucide-react';
import { discordService } from '../services/discord.service';

const GithubIcon = ({ size = 18 }: { size?: number }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);


export default function Contact() {
  const [copied, setCopied] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [status, setStatus] = useState<string | null>(null);

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText('dotruong0704@gmail.com');
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy text: ', err);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      setStatus('Vui lòng điền đầy đủ thông tin.');
      return;
    }

    setStatus('Đang gửi tin nhắn...');
    const success = await discordService.sendNotification(
      formData.name,
      formData.email,
      formData.message
    );

    if (success) {
      setStatus('Cảm ơn bạn! Tin nhắn đã được gửi thành công.');
      setFormData({ name: '', email: '', message: '' });
      setTimeout(() => setStatus(null), 5000);
    } else {
      setStatus('Gửi tin nhắn thất bại. Vui lòng thử lại hoặc sao chép email trực tiếp.');
    }
  };

  return (
    <section
      id="contact"
      style={{
        paddingTop: '8rem',
        paddingBottom: '10rem',
        paddingLeft: '1.5rem',
        paddingRight: '1.5rem',
        maxWidth: '1280px',
        margin: '0 auto',
        width: '100%',
        position: 'relative',
        zIndex: 10,
      }}
    >
      {/* Header */}
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '1.5rem',
          marginBottom: '4rem',
        }}
      >
        <span className="section-label">/ LIÊN HỆ</span>
        <h2
          className="display-heading"
          style={{
            fontSize: 'clamp(2.5rem, 5vw, 4rem)',
            lineHeight: '1.05',
          }}
        >
          Liên Hệ
        </h2>
      </div>

      {/* Grid Layout */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: '1fr',
          gap: '4rem',
        }}
        className="grid-desktop-2"
      >
        {/* Left Side: Contact Coordinates */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '2.5rem' }}>
          <div>
            <h3
              style={{
                fontFamily: "'Instrument Serif', serif",
                fontSize: '1.75rem',
                fontWeight: 400,
                color: 'var(--foreground)',
                marginBottom: '1rem',
              }}
            >
              Thông Tin Liên Hệ
            </h3>
            <p
              style={{
                color: 'var(--muted-foreground)',
                fontSize: '0.95rem',
                lineHeight: '1.6',
                maxWidth: '400px',
                marginBottom: '2rem',
              }}
            >
              Đừng ngại liên hệ với tôi để hợp tác, trao đổi về dự án, hoặc đơn giản là gửi lời chào.
            </p>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            {/* Email Coordinate with Copy */}
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                padding: '1rem 1.25rem',
                borderRadius: '0.75rem',
                border: '1px solid rgba(255, 255, 255, 0.05)',
                background: 'rgba(255, 255, 255, 0.02)',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                <Mail size={16} style={{ color: 'var(--muted-foreground)' }} />
                <span style={{ fontSize: '0.9rem', color: 'var(--foreground)' }}>
                  dotruong0704@gmail.com
                </span>
              </div>
              <button
                onClick={handleCopyEmail}
                style={{
                  background: 'none',
                  border: 'none',
                  cursor: 'pointer',
                  color: copied ? '#10B981' : 'var(--muted-foreground)',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.25rem',
                  fontSize: '0.75rem',
                  fontWeight: 500,
                  transition: 'color 0.2s',
                }}
                title="Sao chép Email"
              >
                {copied ? <Check size={14} /> : <Copy size={14} />}
                <span>{copied ? 'Đã sao chép!' : 'Sao chép'}</span>
              </button>
            </div>

            {/* Phone Coordinate */}
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                gap: '0.75rem',
                padding: '1rem 1.25rem',
                borderRadius: '0.75rem',
                border: '1px solid rgba(255, 255, 255, 0.05)',
                background: 'rgba(255, 255, 255, 0.02)',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                <Phone size={16} style={{ color: 'var(--muted-foreground)' }} />
                <span style={{ fontSize: '0.9rem', color: 'var(--foreground)' }}>
                  0905371627
                </span>
              </div>
              <a
                href="tel:0905371627"
                style={{
                  background: 'none',
                  border: 'none',
                  cursor: 'pointer',
                  color: 'var(--muted-foreground)',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.25rem',
                  fontSize: '0.75rem',
                  fontWeight: 500,
                  textDecoration: 'none',
                  transition: 'color 0.2s',
                }}
                onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--foreground)')}
                onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--muted-foreground)')}
                title="Gọi ngay"
              >
                <Phone size={14} />
                <span>Gọi ngay</span>
              </a>
            </div>

            {/* GitHub Profile Coordinate */}
            <a
              href="https://github.com/truongsut21"
              target="_blank"
              rel="noopener noreferrer"
              className="liquid-glass"
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '0.75rem',
                padding: '1.25rem',
                borderRadius: '0.75rem',
                color: 'var(--foreground)',
                textDecoration: 'none',
                fontSize: '0.9rem',
                fontWeight: 500,
                transition: 'transform 0.2s ease',
              }}
              onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.02)')}
              onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1)')}
            >
              <GithubIcon size={18} />
              <span>Kết nối GitHub</span>
            </a>
          </div>
        </div>

        {/* Right Side: Contact Form */}
        <div className="liquid-glass" style={{ borderRadius: '1rem', padding: '2.5rem' }}>
          <h3
            style={{
              fontFamily: "'Instrument Serif', serif",
              fontSize: '1.75rem',
              fontWeight: 400,
              color: 'var(--foreground)',
              marginBottom: '1.5rem',
            }}
          >
            Gửi Tin Nhắn
          </h3>

          <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
            {/* Name Input */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              <label style={{ fontSize: '0.75rem', color: 'var(--muted-foreground)', fontWeight: 500 }}>
                Họ và Tên
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                className="glass-input"
                placeholder="Nguyễn Văn A"
                required
              />
            </div>

            {/* Email / Phone Input */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              <label style={{ fontSize: '0.75rem', color: 'var(--muted-foreground)', fontWeight: 500 }}>
                Email hoặc SĐT
              </label>
              <input
                type="text"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                className="glass-input"
                placeholder="example@gmail.com / 0901234567"
                required
              />
            </div>

            {/* Message Input */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              <label style={{ fontSize: '0.75rem', color: 'var(--muted-foreground)', fontWeight: 500 }}>
                Tin Nhắn
              </label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                className="glass-input"
                rows={5}
                placeholder="Hãy cho tôi biết về dự án của bạn..."
                style={{ resize: 'vertical' }}
                required
              />
            </div>

            {/* Status Message */}
            {status && (
              <p
                style={{
                  fontSize: '0.85rem',
                  color: status.includes('thành công') ? '#10B981' : status.includes('Đang gửi') ? '#3B82F6' : '#EF4444',
                }}
              >
                {status}
              </p>
            )}

            {/* Submit Button */}
            <button
              type="submit"
              className="liquid-glass"
              style={{
                borderRadius: '0.5rem',
                padding: '1rem',
                color: 'var(--foreground)',
                border: 'none',
                fontWeight: 500,
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '0.5rem',
                fontSize: '0.875rem',
                marginTop: '0.5rem',
                transition: 'transform 0.2s',
              }}
              onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.02)')}
              onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1)')}
            >
              <Send size={16} />
              <span>Gửi Tin Nhắn</span>
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
